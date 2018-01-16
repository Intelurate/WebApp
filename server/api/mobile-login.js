import db from '../modules/database';

//var  setTimeout = require('timers');

import Promise from 'bluebird';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Get, Post } from '../modules/express-decorator';

import twilio from 'twilio';
import rando from 'random-number-in-range';
let accountSid = 'AC9fa9839e7a6243a3e969ae9cfd46fca2'; 
let authToken = '8b1f5fbf7542181ceebdc92d5f13065a';  
let client = new twilio(accountSid, authToken);

class LoginApi {

    constructor(){
    }

    @Get('/api/users/push-token')
    getPushTokenApi(req, res) { 
        console.log(req.body)
        res.send(true);
    }

    @Get('/api/token/test')
    getPushTokenTestApi(req, res) { 
        
        res.send({ name : 'sssss'});
    }

    @Post('/api/send_passcode')
    sendPassCode(req, res) { 

        var num = rando(1000, 9999).toString();       
        
        console.log('req.body.phoneNumber', req.body);

        db.systemUsers.findOne({ phoneNumber: req.body.phoneNumber }, (err, user)=>{
            bcrypt.genSalt(5, function(err, salt) {
                bcrypt.hash(num.toString(), salt, function(err, hash) {

                    jwt.sign({
                        token: hash
                      }, 'secret', { expiresIn: 20 }, (err, encoded) => { 


                        db.systemUsers.update({ phoneNumber: req.body.phoneNumber }, 
                                { $set: { passCode: encoded } }, (err, user)=>{
                            client.messages.create({
                                body: num,
                                to: `+1${req.body.phoneNumber}`, 
                                from: '+15616178113'
                            })
                            .then((message) => {
                                res.send({ 'num': num });                            
                            })
                            .catch(err => console.log(err));
                        });  
                    
                    });  

                });    
            });
        });

    }

    @Get('/api/test_passcode')
    testPassCode(req, res) {   
        
        console.log('req.body', req.body);

        db.systemUsers.findOne({ phoneNumber: req.body.phoneNumber }, (err, user)=>{
            
            console.log('req.body.passCode', req.body.passCode.toString());
            console.log('user.passCode', user.passCode);         
            
            jwt.verify(user.passCode, 'secret', (err, decoded)=>{

                if(err){
                    console.log(err);
                    res.send(false);
                }else{

                    bcrypt.compare(req.body.passCode.toString(), decoded.token, function(err, bool) {

                        console.log('Bool', bool);
                        
                        res.send(bool);

                    });
                }
            
            });

        });
            
    }
    
}



export { LoginApi };