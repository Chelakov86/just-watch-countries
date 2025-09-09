
import axios from 'axios';

export const searchTMDb = async (query: string, country: string) => {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&region=${country}`;
  const response = await axios.get(url);
  // Normalisiere das Ergebnis auf ein einheitliches Format
  return response.data.results.map((item: any) => ({
    id: item.id,
    title: item.title || item.name,
    overview: item.overview,
    poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    provider: 'TMDb',
    type: item.media_type,
  }));
};

export const searchJustWatch = async (query: string, country: string) => {
  // JustWatch hat keine offizielle öffentliche API, daher verwenden wir einen inoffiziellen Endpunkt
  const url = `https://apis.justwatch.com/content/titles/${country}/popular?body=${encodeURIComponent(JSON.stringify({query}))}`;
  const response = await axios.get(url);
  // Normalisiere das Ergebnis
  return (response.data.items || []).map((item: any) => ({
    id: item.id,
    title: item.title,
    overview: item.short_description,
    poster: item.poster,
    provider: 'JustWatch',
    type: item.object_type,
  }));
};

export const searchUtelly = async (query: string, country: string) => {
  const apiKey = process.env.UTELLY_API_KEY;
  const url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${encodeURIComponent(query)}&country=${country}`;
  const response = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
    },
  });
  // Normalisiere das Ergebnis
  return (response.data.results || []).map((item: any) => ({
    id: item.id,
    title: item.name,
    overview: '',
    poster: item.picture,
    provider: 'Utelly',
    type: 'movie',
  }));
};
