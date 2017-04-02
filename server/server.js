import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';

import { serverPort } from '../etc/config.json';
import * as db from './utils/DBUtils.js'

import router from './router/routers.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/../../public');
app.set('view engine', 'html');

app.use('/', router);

const server = app.listen(process.env.PORT || serverPort, () => {
    console.log('Server run in port 8080')
});
