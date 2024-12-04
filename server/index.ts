import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
import authRoutes from './routes/auth';
import jobRoutes from './routes/jobs';
import applicationRoutes from './routes/applications';
import jobAlertRoutes from './routes/jobAlerts';
import blogRoutes from './routes/blog';

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/job-alerts', jobAlertRoutes);
app.use('/api/blog', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});