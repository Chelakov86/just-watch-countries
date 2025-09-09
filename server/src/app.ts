// Express app entry point
// HINT: Set up Express, routes, and middleware here
import express from 'express';
import dotenv from 'dotenv';
const searchRoutes = require('./routes/searchRoutes').default;

dotenv.config();

const app = express();
app.use(express.json());

// HINT: Mount /api/search route
app.use('/api/search', searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
