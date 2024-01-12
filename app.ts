import express, {Application} from "express";
import * as dotenv from "dotenv";
import http from "http";
import config from './config/index'

dotenv.config();

const app: Application = express();
config(app, express);


const PORT = process.env.INTERNAL_PORT || 80;

const server = http.createServer(app);

server.listen(PORT, function () {
    console.log('Server started on port : ' + PORT);
});

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});