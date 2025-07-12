// src/views/landings/default/data/hero.jsx
import React from 'react';
import Button from '@mui/material/Button';

export const hero = {
  // mantém o chip escondido
  chip: {
    label: <></>,
    sx: { display: 'none' },
  },

  // texto puro, sem novo <h1>, estilizado via <span> interno
  headLine: (
    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
      Multiplique seu atendimento com IA: crie treinos e dietas personalizados em segundos.
    </span>
  ),

  // subtítulo preservado como string
  captionLine:
    'Automatize seu atendimento, escale seu serviço e entregue protocolos com a sua identidade, em segundos.',

primaryBtn: (
    <Button
      variant="contained"
      component="a"
      href="#precos"
sx={{
        mt: 2,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        backgroundColor: 'primary.main',
        color: 'common.white',
        boxShadow: '0 0 16px rgba(0,0,0,0.3)',
        borderRadius: '24px',
      }}
    >
      Adquira Agora!
    </Button>
  ),

  videoSrc: '/assets/videos/thumbnails/intro.mp4',
  listData: [],

  // adiciona margem superior
  sx: {
    mt: 6, // 6 * 8px = 48px
  },
};
