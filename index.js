import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './src/routes/studentsRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 6060;
app.get('/', (req, res) => {
  res.send('API is running');
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
