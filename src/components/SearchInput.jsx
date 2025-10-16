import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import useCepSearch from '../hooks/useCepSearch';

function SearchInput({ onSuccess }) {
  const {
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
    searchCep,
  } = useCepSearch();

  return (
    <Box display="flex" gap={2} mt={4} flexDirection={{ xs: 'column', sm: 'row' }}>
      <TextField
        fullWidth
        label="Digite o CEP"
        variant="outlined"
        value={formattedCep}
        onChange={(e) => handleFormattedCepChange(e.target.value)}
        inputProps={{ maxLength: 9 }}
        error={!!error}
        helperText={error}
      />
      <Button
        variant="contained"
        onClick={() => searchCep(onSuccess)}
        disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>
    </Box>
  );
}

export default SearchInput;
