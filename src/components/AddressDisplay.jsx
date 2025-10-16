import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddressDisplay({ cepData, onClose }) {
  if (!cepData) return null;

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        mt: 4,
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#f0f8ff',
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'grey.700',
        }}
        aria-label="Fechar"
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Resultado do CEP
      </Typography>
      <Typography><strong>CEP:</strong> {cepData.cep}</Typography>
      <Typography><strong>Logradouro:</strong> {cepData.logradouro || 'N/A'}</Typography>
      <Typography><strong>Bairro:</strong> {cepData.bairro || 'N/A'}</Typography>
      <Typography><strong>Cidade:</strong> {cepData.localidade}</Typography>
      <Typography><strong>Estado:</strong> {cepData.uf}</Typography>
    </Paper>
  );
}

export default AddressDisplay;
