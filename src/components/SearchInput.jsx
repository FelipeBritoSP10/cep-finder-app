import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Box, Typography } from '@mui/material';
import useCepSearch from '../hooks/useCepSearch';

export default function SearchInput() {
  const {
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
    searchCep,
  } = useCepSearch();

  const [address, setAddress] = useState(null);

  const handleSearch = () => {
    searchCep((data) => {
      setAddress(data);
    });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <TextField
        label="Digite o CEP"
        variant="outlined"
        fullWidth
        value={formattedCep}
        onChange={(e) => handleFormattedCepChange(e.target.value)}
        placeholder="00000-000"
        error={!!error}
        helperText={error || ' '}
        inputProps={{ maxLength: 9 }}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={isLoading}
        fullWidth
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Buscar'}
      </Button>

      {address && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>Endereço encontrado:</Typography>
          <Typography><strong>Logradouro:</strong> {address.logradouro || '—'}</Typography>
          <Typography><strong>Bairro:</strong> {address.bairro || '—'}</Typography>
          <Typography><strong>Cidade:</strong> {address.localidade || '—'}</Typography>
          <Typography><strong>Estado:</strong> {address.uf || '—'}</Typography>
          <Typography><strong>CEP:</strong> {address.cep || formattedCep}</Typography>
        </Box>
      )}
    </Box>
  );
}