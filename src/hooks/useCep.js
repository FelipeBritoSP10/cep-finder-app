import { useState } from 'react';

export default function useCep() {
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState('');

  const fetchCep = async (cep) => {
    setError('');
    setCepData(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
      } else {
        setCepData(data);
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
    }
  };

  const clearData = () => setCepData(null);

  return { cepData, error, fetchCep, clearData };
}
