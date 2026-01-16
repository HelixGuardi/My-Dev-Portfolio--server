import mongoose from 'mongoose';
import { env } from '../config/env';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = env.MONGODB_URI;
    await mongoose.connect(mongoURI);
    console.log('✅Connected to MongoDB');

  } catch (error) {
    console.error('❌Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Handle connect event errors
mongoose.connection.on('disconnected', () => {
  console.error('⚠️MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('❌MongoDB connection error: ', error);
})