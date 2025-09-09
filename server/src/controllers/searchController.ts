// Search controller
// HINT: Parse request and call correct service
import { Request, Response } from 'express';
import { searchTMDb, searchJustWatch, searchUtelly } from '../services/searchServices';

export const searchController = async (req: Request, res: Response) => {
  const { query, country, provider } = req.body;
  // HINT: Route to correct service based on provider
  res.json({});
};
