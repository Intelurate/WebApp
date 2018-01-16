// import AppMod from 'app-module-path'; 
// AppMod.addPath('./modules');

import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { UsersApi } from './api/users';
import { ShopApi } from './api/shop';
import { PurchaseOrderApi } from './api/purchase-order';
import { BootstrapApi } from './api/bootstrap';
import { ExpressApi } from './modules/express-decorator';

//import { setTimeout } from 'timers';

let app = express();
app.use(cookieParser());
app.use(morgan('dev'));  // Create and display a HTTP logger middleware function
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '50mb'
}));


['/lib/bootstrap/css/bootstrap.min.css',
'/lib/bootstrap/css/bootstrap.css',
'/lib/font-awesome/css/font-awesome.min.css',
'/lib/font-awesome/css/font-awesome.css',		
'/lib/animate.css',
'/lib/selectric/selectric.css',
'/lib/swiper/css/swiper.min.css',
'/lib/aos/aos.css',
'/lib/Magnific-Popup/magnific-popup.css'].forEach((v,i)=>{
    app.get(v, function (req, res) {                
        res.setHeader('Content-Type', 'text/css');		
        var stream = fs.createReadStream('./listo/'+v);
        stream.pipe(res);
    });	
});


ExpressApi.run(app, [
    UsersApi,
    ShopApi,
    PurchaseOrderApi,
    BootstrapApi
], true);


export { app, UsersApi, ShopApi, PurchaseOrderApi }