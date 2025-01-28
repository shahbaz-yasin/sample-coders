export const themeConfigs = {
  light: {
    name: 'light',
    colors: {
      primary: '#2C3E50',
      secondary: '#222222',
      background: '#F9F9F9',
      accent: '#FFC107',
      highlight: '#2C3E50',
      text: {
        primary: '#2C3E50',
        secondary: '#222222',
        contrast: '#FFFFFF',
      },
      surface: {
        paper: '#FFFFFF',
        default: '#F9F9F9',
      }
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '16px',
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#1E293B',      // Dark blue-gray
      secondary: '#334155',    // Lighter blue-gray
      background: '#0F172A',   // Very dark blue
      accent: '#3B82F6',       // Bright blue
      highlight: '#60A5FA',    // Light blue
      text: {
        primary: '#F1F5F9',    // Very light gray
        secondary: '#CBD5E1',  // Light gray
        contrast: '#FFFFFF',   // White
      },
      surface: {
        paper: '#1E293B',      // Dark blue-gray
        default: '#0F172A',    // Very dark blue
      }
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '16px',
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    }
  }
};

export const getThemeTokens = (mode) => {
  const colors = themeConfigs[mode].colors;
  
  return {
    palette: {
      mode,
      primary: {
        main: colors.primary,
        contrastText: colors.text.contrast,
      },
      secondary: {
        main: colors.secondary,
        contrastText: colors.text.contrast,
      },
      background: {
        default: colors.surface.default,
        paper: colors.surface.paper,
      },
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
      },
      accent: {
        main: colors.accent,
        contrastText: mode === 'light' ? colors.primary : colors.text.contrast,
      },
    },
    typography: {
      fontFamily: themeConfigs[mode].typography.fontFamily,
      fontSize: parseInt(themeConfigs[mode].typography.fontSize),
      h1: {
        fontFamily: themeConfigs[mode].typography.fontFamily,
        fontWeight: themeConfigs[mode].typography.fontWeights.semibold,
        color: colors.text.primary,
      },
      h2: {
        fontFamily: themeConfigs[mode].typography.fontFamily,
        fontWeight: themeConfigs[mode].typography.fontWeights.semibold,
        color: colors.text.primary,
      },
      h3: {
        fontFamily: themeConfigs[mode].typography.fontFamily,
        fontWeight: themeConfigs[mode].typography.fontWeights.semibold,
        color: colors.text.primary,
      },
      body1: {
        fontFamily: themeConfigs[mode].typography.fontFamily,
        fontSize: '1rem',
        color: colors.text.primary,
      },
      button: {
        fontFamily: themeConfigs[mode].typography.fontFamily,
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '9999px',
            fontFamily: themeConfigs[mode].typography.fontFamily,
          },
          contained: {
            boxShadow: 'none',
            backgroundColor: colors.primary,
            color: colors.text.contrast,
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: mode === 'light' ? '#1a252f' : '#2d3a4f',
            },
          },
          outlined: {
            borderColor: colors.primary,
            color: colors.text.primary,
            '&:hover': {
              backgroundColor: `${colors.primary}1a`,
              borderColor: colors.primary,
            },
          },
          text: {
            color: colors.text.primary,
            '&:hover': {
              backgroundColor: `${colors.primary}1a`,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.surface.default,
            color: colors.text.primary,
            fontSize: themeConfigs[mode].typography.fontSize,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: colors.surface.paper,
            color: colors.text.primary,
          },
        },
      },
    },
  };
}; 