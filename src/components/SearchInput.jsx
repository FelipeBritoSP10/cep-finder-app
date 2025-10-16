import React from 'react';
import useCepSearch from '../hooks/useCepSearch';

export default function CepForm() {
  const {
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
    searchCep,
  } = useCepSearch();

  const handleSearch = () => {
    searchCep((data) => {
      if (data) {
        console.log('Endereço:', data);
      }
    });
  };

  return (
    <div>
      <label>Digite o CEP:</label>
      <input
        type="text"
        value={formattedCep}
        onChange={(e) => handleFormattedCepChange(e.target.value)}
        placeholder="00000-000"
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
