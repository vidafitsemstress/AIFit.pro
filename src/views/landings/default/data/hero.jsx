// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Sua solução com infinitas
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Possibilidades
            </Typography>
          }
          sx={{
            height: 24,
            bgcolor: 'primary.lighter',
            mr: -1,
            ml: 0.75,
            '& .MuiChip-label': { px: 1.25 }
          }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Personalize protocolos do seu jeito com inteligência artificial e sem perder seu toque.',
  captionLine: 'Automatize seu atendimento, escale seu serviço e entregue protocolos com a sua identidade, em segundos.',
  // primaryBtn: { children: 'Explorar', href: SECTION_PATH },
  videoSrc: '/assets/videos/thumbnails/intro.mp4',
 // videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
   
  ]
};
