
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (params: { query: string; country: string; provider: string }) => {
    const searchParams = new URLSearchParams(params).toString();
    navigate(`/results?${searchParams}`);
  };

  return (
    <div>
      <h1>Streaming Availability Search</h1>
      <div className="card">
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Streaming Availability Search</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HomePage;
