
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultList from '../components/ResultList';
import axios from 'axios';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    const country = params.get('country') || 'DE';
    const provider = params.get('provider') || 'TMDb';
    if (!query) return;
    setLoading(true);
    setError(null);
    axios.post('/api/search', { query, country, provider })
      .then(res => setResults(res.data.results || []))
      .catch(err => setError('Fehler bei der Suche'))
      .finally(() => setLoading(false));
  }, [location.search]);

  return (
    <div className="card">
      <h2 style={{ textAlign: 'center', marginBottom: 18 }}>Ergebnisse</h2>
      {loading && <div>Lade...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ResultList results={results} />
    </div>
  );
};

export default ResultsPage;
