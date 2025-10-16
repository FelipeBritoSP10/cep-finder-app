import { useState } from 'react';
import IMask from 'imask';
import { getCepData } from "../services/cepApi";

export default function useCepSearch() {
  const [formattedCep, setFormattedCep] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormattedCepChange = (value) => {
    setError('');

    const cleanValue = value.replace(/\D/g, ''); 
    const cepMask = IMask.createMask({ mask: '00000-000' });
    cepMask.value = cleanValue;

      setFormattedCep(cepMask.value);
  };

  const searchCep = async (onSuccess) => {
    const unmaskedCep = formattedCep.replace(/\D/g, '');

    if (unmaskedCep.length !== 8) {
      setError('Digite um CEP válido com 8 dígitos.');
      onSuccess(null);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const addressData = await getCepData(unmaskedCep);

      if (addressData.erro) {
        onSuccess(null);
        setError('CEP não encontrado.');
      } else {
        onSuccess(addressData);
      }
    } catch (fetchError) {
      console.error('Erro ao buscar dados do CEP:', fetchError);
      onSuccess(null);
      setError(fetchError.message || 'Erro desconhecido ao buscar o CEP.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
    searchCep,
    setError,
  };
}