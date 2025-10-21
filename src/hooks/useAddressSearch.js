import { useState } from 'react';
import { getCepData } from '../services/cepApi';

export default function useAddressSearch() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      const isCep = /^[0-9]{5}-?[0-9]{3}$/.test(query);

      let data;

      if (isCep) {
        data = await getCepData(query);
        setResults([data]);
      } else {
        const parts = query.trim().split(' ');
        const uf = 'SP';
        const city = parts[0];
        const street = parts.slice(1).join(' ');

        const response = await fetch(
          `https://viacep.com.br/ws/${uf}/${encodeURIComponent(city)}/${encodeURIComponent(street)}/json/`
        );

        const json = await response.json();

        if (json.erro || json.length === 0) {
          setError('Nenhum resultado encontrado.');
        } else {
          setResults(Array.isArray(json) ? json : [json]);
        }
      }
    } catch (err) {
      setError(err.message || 'Erro ao buscar endereço. Verifique os dados.');
    } finally {
      setIsLoading(false);
    }
  };

  return { query, setQuery, isLoading, error, results, handleSearch };
}
