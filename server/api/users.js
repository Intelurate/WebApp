import db from '../modules/database';
import { Get, Post } from '../modules/express-decorator';
import { BcryptAsync } from '../modules/bcrypt-async';
import { JWTAsync } from '../modules/jwt-async';

class UsersApi {
    
    @Post("/test-api-post")
    TestApiPost(req, res) {       
        if(req.body.password && req.body.email) {
            return res.send({ name: "eddie" });            
        }
        return res.sendStatus(403);
    }

    @Get("/test-api-get")
    TestApiGet(req, res) {     
        if(req.query.password && req.query.email) {
            return res.send({ name: "eddie" });            
        }
        return res.sendStatus(403);
    }

    @Get("/logout")
    Logout(req, res) {
        res.clearCookie('UserToken');
        res.redirect("/login");
    }

    @Post("/api/login")
    async Login(req, res) {  

        if(!req.body.password || !req.body.email) {
            return res.sendStatus(403);
        }

        let user = await db.users.findOne({ email: req.body.email }, { password: 1 });

        if(!user){
            return res.send(false);
        }

        let bcrypt = BcryptAsync.init();
        let password = await bcrypt.compare(req.body.password, user.password);

        if(password === true){  
            
            let jwtAsync = JWTAsync.init('e8vh745v9o875w9v');
            let token = await jwtAsync.sign({ userId : user._id.toString() });
            
            res.cookie("UserToken", token);

            return res.send(true);
        }else{
            return res.send(false);
        }
    }
}

export { UsersApi };