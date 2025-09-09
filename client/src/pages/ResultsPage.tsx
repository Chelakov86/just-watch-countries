

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultList from '../components/ResultList';
import { searchTitles, SearchResult } from '../api';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<SearchResult[]>([]);
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
    setResults([]);
    searchTitles({ query, country, provider })
      .then(results => {
        setResults(results);
        if (results.length === 0) {
          setError('Keine Ergebnisse gefunden.');
        }
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          setError(`API-Fehler: ${err.response.data.error}`);
        } else if (err.message && err.message.includes('Network')) {
          setError('Netzwerkfehler: Bitte Verbindung prüfen.');
        } else if (err.message) {
          setError(err.message);
        } else {
          setError('Unbekannter Fehler bei der Suche.');
        }
      })
      .finally(() => setLoading(false));
  }, [location.search]);

  return (
    <div className="card" style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 18 }}>Ergebnisse</h2>
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(255,255,255,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2
        }}>
          <div style={{ fontSize: 20, color: '#6366f1' }}>Lade...</div>
        </div>
      )}
      {error && (
        <div style={{ color: 'red', marginBottom: 12, textAlign: 'center' }}>{error}</div>
      )}
      <ResultList results={results} />
    </div>
  );
};

export default ResultsPage;
