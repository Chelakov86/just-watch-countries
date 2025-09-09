
import React from 'react';

type Result = {
  id: string | number;
  title: string;
  overview?: string;
  poster?: string | null;
  provider: string;
  type?: string;
};

type ResultListProps = {
  results: Result[];
};

const ResultList: React.FC<ResultListProps> = ({ results }) => {
  if (!results.length) return <div>Keine Ergebnisse gefunden.</div>;
  return (
    <div className="resultsGrid">
      {results.map(result => (
        <div key={result.id} className="resultCard">
          {result.poster && <img src={result.poster} alt={result.title} className="poster" />}
          <h3>{result.title}</h3>
          <p className="overview">{result.overview}</p>
          <span className="provider">{result.provider} {result.type && `| ${result.type}`}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultList;
