import { Request, Response } from 'express';
import { searchTMDb, searchJustWatch, searchUtelly } from '../services/searchServices';

export const searchController = async (req: Request, res: Response) => {
  const { query, country, provider } = req.body;

  // Eingabevalidierung
  if (!query || typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'Suchbegriff (query) ist erforderlich.' });
  }
  if (!country || typeof country !== 'string' || country.length !== 2) {
    return res.status(400).json({ error: 'Ländercode (country) muss genau 2 Buchstaben haben.' });
  }
  if (!provider || !['TMDb', 'JustWatch', 'Utelly'].includes(provider)) {
    return res.status(400).json({ error: 'Ungültiger Provider.' });
  }

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
    }
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Fehler bei der Suche', details: (error as Error).message });
  }
};
