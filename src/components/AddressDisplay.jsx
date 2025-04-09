import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddressDisplay({ data, onClose }) {
  if (!data) return null;

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4, position: 'relative' }}>
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'grey.600',
        }}
        aria-label="Fechar"
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" gutterBottom>
        Resultado do CEP
      </Typography>
      <Typography><strong>CEP:</strong> {data.cep}</Typography>
      <Typography><strong>Logradouro:</strong> {data.logradouro || 'N/A'}</Typography>
      <Typography><strong>Bairro:</strong> {data.bairro || 'N/A'}</Typography>
      <Typography><strong>Cidade:</strong> {data.localidade}</Typography>
      <Typography><strong>Estado:</strong> {data.uf}</Typography>
    </Paper>
  );
}

export default AddressDisplay;
