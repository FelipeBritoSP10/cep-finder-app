import React from 'react';
import { TextField, Button, CircularProgress, Box } from '@mui/material';
import useCepSearch from '../hooks/useCepSearch';

export default function SearchInput() {
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
    </Box>
  );
}
