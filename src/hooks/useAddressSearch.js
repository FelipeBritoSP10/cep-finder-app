// src/hooks/useAddressSearch.js
import { useState } from 'react';
import { getCepData } from '../services/cepApi'; // <-- aqui está o service correto

export default function useAddressSearch() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      // Detecta se é CEP
      const isCep = /^[0-9]{5}-?[0-9]{3}$/.test(query);

      if (isCep) {
        const data = await getCepData(query);
        setResults([data]);
      } else {
        // Busca por cidade + logradouro
        const parts = query.trim().split(' ');
        const uf = 'SP'; // Pode tornar dinâmico depois
        const city = parts[0];
        const street = parts.slice(1).join(' ');

        const response = await fetch(
          `https://viacep.com.br/ws/${uf}/${encodeURIComponent(city)}/${encodeURIComponent(street)}/json/`
        );

        const data = await response.json();

        if (data.erro || (Array.isArray(data) && data.length === 0)) {
          setError('Nenhum resultado encontrado.');
        } else {
          setResults(Array.isArray(data) ? data : [data]);
        }
      }
    } catch (err) {
      setError(err.message || 'Erro ao buscar endereço.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    setQuery,
    isLoading,
    error,
    results,
    handleSearch,
  };
}
