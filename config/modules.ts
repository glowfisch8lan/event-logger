import { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export = (app: Application, express: any) => {
  dotenv.config({ path: __dirname + '/../.env' });
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(express.json({ limit: '50MB' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10000,
  });
};
