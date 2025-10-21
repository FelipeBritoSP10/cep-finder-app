import React from 'react';
import { TextField, Button, CircularProgress, Box, Typography } from '@mui/material';
import useAddressSearch from '.../hooks/useAddressSearch'; 

export default function SearchInput() {
  const { query, setQuery, isLoading, error, results, handleSearch } = useAddressSearch();

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <TextField
        label="Digite CEP, cidade ou endereço"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Procure por CEP ou endereço completo..."
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={isLoading || !query.trim()}
        fullWidth
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Buscar'}
      </Button>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {results.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Resultados encontrados:
          </Typography>

          {results.map((address, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                p: 1.5,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <Typography><strong>Logradouro:</strong> {address.logradouro || '—'}</Typography>
              <Typography><strong>Bairro:</strong> {address.bairro || '—'}</Typography>
              <Typography><strong>Cidade:</strong> {address.localidade || '—'}</Typography>
              <Typography><strong>Estado:</strong> {address.uf || '—'}</Typography>
              <Typography><strong>CEP:</strong> {address.cep || '—'}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}