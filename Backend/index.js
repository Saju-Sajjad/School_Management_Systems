import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

// Enable CORS with specific origin
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'userAuth'
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
