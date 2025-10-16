import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import useCepSearch from '../hooks/useCepSearch'; 

function SearchInput({ onSearchClick }) {
  const {
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
  } = useCepSearch();

  const isSearchDisabled = isLoading || formattedCep.length !== 9;

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
        onClick={onSearchClick} 
        disabled={isSearchDisabled}
        sx={{ minWidth: 120 }}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>
    </Box>
  );
}

export default SearchInput;