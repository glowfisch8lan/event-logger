import {Application} from 'express';
import modules from './modules';
import routes from './routes';
import queue from './queue'
import {database} from "./database";
import {config as logger} from "./logger";

export default (app: Application, express: any) => {
    modules(app, express);
    routes(app);
    logger(app);
    database(app);
    queue(app);
};

