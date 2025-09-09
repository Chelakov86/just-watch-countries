import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import searchRoutes from './routes/searchRoutes';

const app = express();
app.use(express.json());

app.use('/api/search', searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
