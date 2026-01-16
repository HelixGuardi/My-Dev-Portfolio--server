import dotenv from 'dotenv';;

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/MyDevPortfolioCLUSTER'
}