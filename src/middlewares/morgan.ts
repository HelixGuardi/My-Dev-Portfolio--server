import morgan from 'morgan';
import { env } from '../config/env';

export const morganMiddleware = morgan(
  env.nodeEnv === 'development' ? 'dev' : 'combined'
);