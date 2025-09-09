
import React, { useState } from 'react';
import ProviderSelector from './ProviderSelector';

type SearchFormProps = {
  onSearch: (params: { query: string; country: string; provider: string }) => void;
};


const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('DE');
  const [provider, setProvider] = useState('TMDb');
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!query.trim()) return 'Bitte gib einen Suchbegriff ein.';
    if (!country.match(/^[A-Z]{2}$/)) return 'Ländercode muss genau 2 Großbuchstaben sein (z.B. DE, US).';
    if (!provider) return 'Bitte wähle einen Provider.';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    onSearch({ query, country, provider });
  };

  return (
    <form onSubmit={handleSubmit} className="form" style={{ marginTop: 24 }}>
      <input
        className="input"
        type="text"
        placeholder="Titel oder Name suchen..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        required
      />
      <input
        className="input"
        type="text"
        placeholder="Ländercode (z.B. DE, US)"
        value={country}
        onChange={e => setCountry(e.target.value.toUpperCase())}
        maxLength={2}
        required
      />
      <ProviderSelector value={provider} onChange={e => setProvider(e.target.value)} />
      <button className="button" type="submit">Suchen</button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </form>
  );
};

export default SearchForm;
