import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchInput from '../components/SearchInput';
import AddressDisplay from '../components/AddressDisplay';
import ErrorMessage from '../components/ErrorMessage';

 function Home() {
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState('');

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
      Consulta de CEP      
      </Typography>
      <SearchInput onSuccess={setCepData} onError={setError} />
      <ErrorMessage message={error} />
      <AddressDisplay data={cepData} />
    </Container>
  );
}

export default Home;