
import React from 'react';

type ProviderSelectorProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProviderSelector: React.FC<ProviderSelectorProps> = ({ value, onChange }) => {
  return (
    <select className="input" value={value} onChange={onChange} required>
      <option value="">Provider wählen...</option>
      <option value="TMDb">TMDb</option>
      <option value="JustWatch">JustWatch</option>
      <option value="Utelly">Utelly</option>
    </select>
  );
};

export default ProviderSelector;
