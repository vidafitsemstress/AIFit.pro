'use client';

// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright } from '@/components/footer';
import SvgIcon from '@/components/SvgIcon';
import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

export default function Footer7() {
  const instagramIcon = (
    <Link
      href="https://www.instagram.com/seu_perfil" // Substitua pelo seu link real
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <SvgIcon name="tabler-brand-instagram" color="text.secondary" />
    </Link>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack
        id="footer-7"
        role="contentinfo"
        rel="noopener noreferrer"
        aria-label="Footer 7"
        sx={{ gap: { xs: 3, sm: 4, md: 5 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              sx={{
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
            <Stack
  direction="row"
  alignItems="center"
  sx={{ width: '100%', position: 'relative' }}
>
  {/* Imagem fixada à esquerda */}
  <Box
    component="img"
    src="/assets/images/images/Virtu.AI1.png"
    alt="Logo Virtu.AI"
    sx={{ height: 20 }}
  />

  {/* Texto centralizado no espaço total */}
  <Box sx={{ flex: 1, textAlign: 'center', position: 'absolute', left: 0, right: 0, mx: 'auto' }}>
    <Copyright type={CopyrightType.TYPE3} />
  </Box>
</Stack>


              {instagramIcon}
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
