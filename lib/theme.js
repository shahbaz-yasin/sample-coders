import { createTheme } from '@mui/material/styles';
import { getThemeTokens } from './themes/themeConfig';

const theme = createTheme({
  ...getThemeTokens('light'),
  components: {
    ...getThemeTokens('light').components,
    MuiPopover: {
      defaultProps: {
        container: typeof window !== 'undefined' ? () => document.getElementById('__next') : undefined,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: typeof window !== 'undefined' ? () => document.getElementById('__next') : undefined,
      },
    },
    MuiModal: {
      defaultProps: {
        container: typeof window !== 'undefined' ? () => document.getElementById('__next') : undefined,
      },
    },
  },
});

export default theme; 