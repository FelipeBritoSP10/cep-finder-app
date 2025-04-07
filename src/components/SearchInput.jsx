import React, { useState } from 'react';
import IMask from 'imask';
import { TextField, Button, Box } from '@mui/material';
import { getCepData } from '../services/cepApi';

function SearchInput({ onSuccess, onError }) {
  const [formattedCep, setFormattedCep] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormattedCepChange = (event) => {
    const cepMask = IMask.createMask({ mask: '00000-000' });
    cepMask.resolve(event.target.value);
    setFormattedCep(cepMask.value);
  };

  const handleCepSearch = async () => {
    const unmaskedCep = formattedCep.replace(/\D/g, ''); 
    if (unmaskedCep.length !== 8) {
      onError('Digite um CEP válido com 8 dígitos.');
      return;
    }
    setIsLoading(true);
    onError(''); 

    try {
      const addressData = await getCepData(unmaskedCep);

      if (addressData.erro) {
        onSuccess(null);
        onError('CEP não encontrado.');
      } else {
        onSuccess(addressData);
      }
    } catch (fetchError) {
      console.error('Erro ao buscar dados do CEP:', fetchError);
      onSuccess(null);
      onError('Erro ao buscar o CEP.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box display="flex" gap={2} mt={4}>
      <TextField
        fullWidth
        label="Digite o CEP"
        variant="outlined"
        value={formattedCep}
        onChange={handleFormattedCepChange}
        inputProps={{ maxLength: 9 }}
      />
      <Button variant="contained" onClick={handleCepSearch} disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>
    </Box>
  );
}

export default SearchInput;
