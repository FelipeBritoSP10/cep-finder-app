import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import SearchInput from '../components/SearchInput';
import AddressDisplay from '../components/AddressDisplay';
import ErrorMessage from '../components/ErrorMessage';
import useHome from '../hooks/useHome';

function Home() {
  const { cepData, showCepData, clearCepData, error } = useHome();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1976d2', textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
        Consulta de CEP
      </Typography>

      <Paper elevation={6} sx={{ p: 4, mt: 4, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
        <SearchInput onSuccess={showCepData} />
        <Box mt={2}>
          <ErrorMessage message={error} />
        </Box>
      </Paper>

      <AddressDisplay cepData={cepData} onClose={clearCepData} />
    </Container>
  );
}

export default Home;
