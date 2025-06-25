// src/views/landings/default/data/hero.jsx
import React from 'react';
import { SECTION_PATH } from '@/path';

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

  primaryBtn: {
    children: 'Explorar',
    href: SECTION_PATH,
    target: '_blank',
    rel: 'noopener noreferrer',
    sx: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
    },
  },

  videoSrc: '/assets/videos/thumbnails/intro.mp4',
  listData: [],

  // adiciona margem superior
  sx: {
    mt: 6, // 6 * 8px = 48px
  },
};
