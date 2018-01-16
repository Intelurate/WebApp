// import AppMod from 'app-module-path'; 
// AppMod.addPath('./modules');
import http from 'http';
import { app } from './app';

let server = http.createServer(app);
let port = 7272;
server.listen(port, () => {
    console.log(`Gulp is running the app on port ${port} (localhost:${port})`);
});