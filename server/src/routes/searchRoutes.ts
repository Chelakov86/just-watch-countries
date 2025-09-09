// Search route
// HINT: Route to /api/search, call controller
import express from 'express';
import { searchController } from '../controllers/searchController';

const router = express.Router();

router.post('/', searchController);

export default router;
