import createTheme from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#B8407D',
      dark: '#a0346a',
    },
    secondary: {
      main: '##E00070',
      dark: '#FFF3F9',
      light: '#FFF3F9',
    },
    background: {
      paper: '#FFEBF4',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },

  typography: {
    fontFamily: 'Bebas Neue, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '4.5rem',
      letterSpacing: '0.5rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: '0.1rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    body1: {
      letterSpacing: '0.2rem',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.3rem',
      fontWeight: 400,
      letterSpacing: '0.1rem',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          backgroundColor: '#b8407d',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          outline: 'none',
          border: 'none',
          borderRadius: '0.25rem',
          color: '#ffffff',
          fontWeight: 700,
          letterSpacing: '0.1rem',
          '&:hover, &:focus, $:active': {
            backgroundColor: '#b8407d',
          },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.3rem',
          color: '#E00070',
          fontWeight: 400,
          letterSpacing: '0.1rem',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '100%',
          border: 'none',
          padding: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: 0,
          letterSpacing: '0',
          fontSize: '1.3rem',
          ':before': {
            width: '100%',
            maxWidth: 200,
          },
          ':after': {
            width: '100%',
            maxWidth: 200,
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem ',
          borderBottom: '1px solid #ff6fb8',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#b8407d',
          padding: '2vh',
          letterSpacing: '0.1rem',
          '& .MuiPaginationItem-root': {
            fontWeight: 700,
            letterSpacing: '0.1rem',
            backgroundColor: 'transparent',
            color: '#ffffff',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#ff6fb8',
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;
