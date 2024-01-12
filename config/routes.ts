import {Application, Request, Response} from 'express';
import EventRoutes from "../src/modules/events/event.routes";

// Common
export = (app: Application) => {
  app.get('/api/v1', function (req: Request, res: Response) {
    res.send('OK')
  })
  app.use('/api/v1/events', EventRoutes);
};
