/***************************  DEFAULT / AI THEME - PALETTE  ***************************/

export default function palette() {
  const textPrimary = '#1A1C1E'; // AI/neutral/10 - on surface
  const textSecondary = '#42474E'; // AI/neutral variant/30 - on surface variant
  const divider = '#C2C7CE'; // AI/neutral variant/80 - outline variant
  const background = '#FFF';

  const lightPalette = {
    primary: {
      lighter: '#E0F7F6', // primary 90%
      light: '#AEEDEA',   // primary 70%
      main: '#4FBCB8',    // primary
      dark: '#39918E',    // primary 30%
      darker: '#256866'   // primary 10%
    },
    secondary: {
      lighter: '#FFE5E0', // secondary 90%
      light: '#FFBFAE',   // secondary 70%
      main: '#FF7F50',    // secondary
      dark: '#CC6540',    // secondary 30%
      darker: '#994C30'   // secondary 10%
    },
    grey: {
      50: '#F9F9FC', // AI/neutral/98 - surface / surface bright
      100: '#F1F4F9', // AI/neutral/96 - surface container low
      200: '#EBEEF3', // AI/neutral/94 - surface container
      300: '#E6E8EE', // AI/neutral/92 - surface container high
      400: '#E2E2E5', // AI/neutral/90 - surface container highest
      500: '#D7DADF', // AI/neutral/87 - surface dim
      600: divider, // AI/neutral variant/80 - outline variant
      700: '#72787E', // AI/neutral variant/50 - outline
      800: textSecondary, // AI/neutral variant/30 - on surface variant
      900: textPrimary // AI/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // AI/neutral/10 - on surface
      secondary: textSecondary // AI/neutral variant/30 - on surface variant
    },
    divider,
    background: {
      default: background
    }
  };

  return {
    ...lightPalette
  };
}
