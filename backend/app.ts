// app.ts
import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from './src/routes/auth';
import userRoutes from './src/routes/users';
import quizRoutes from './src/routes/quizzes';
import statsRoutes from './src/routes/stats';
import categoryRoutes from './src/routes/categories';

const app: Application = express();

// Middleware pour autoriser toutes les origines
app.use(cors());

// Middleware pour gérer les données JSON
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/quizzes', quizRoutes);
app.use('/stats', statsRoutes);
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
