'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../../lib/createEmotionCache';
import { createTheme } from '@mui/material/styles';
import { getThemeTokens } from '../../lib/themes/themeConfig';
import { useTheme } from '../../lib/context/ThemeContext';

const clientSideEmotionCache = createEmotionCache();

export function ThemeProvider({ children }) {
  const { mode } = useTheme();
  const theme = createTheme(getThemeTokens(mode));

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
} 