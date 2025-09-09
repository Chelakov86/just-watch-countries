import { Request, Response } from 'express';
import { searchTMDb, searchJustWatch, searchUtelly } from '../services/searchServices';

export const searchController = async (req: Request, res: Response) => {
  const { query, country, provider } = req.body;
  try {
    let results = [];
    switch (provider) {
      case 'TMDb':
        results = await searchTMDb(query, country);
        break;
      case 'JustWatch':
        results = await searchJustWatch(query, country);
        break;
      case 'Utelly':
        results = await searchUtelly(query, country);
        break;
      default:
        return res.status(400).json({ error: 'Ungültiger Provider' });
    }
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Fehler bei der Suche', details: (error as Error).message });
  }
};
