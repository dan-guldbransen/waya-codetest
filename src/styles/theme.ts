import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b8407d',
      light: '#ffd2e9',
      dark: '#ff6fb8',
    },
    secondary: {
      main: '#333333',
      light: '#f1f1f1',
      dark: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
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
      fontSize: '3rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    body1: {
      letterSpacing: '0.2rem',
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
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
          borderBottom: '1px solid #f1f1f1',
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
          color: '#fff',
          fontWeight: 700,
          letterSpacing: '0.1rem',
          '& .MuiPaginationItem-root': {
            color: '#fff',
            fontWeight: 700,
            '&.Mui-selected': {
              backgroundColor: '#fff',
              color: '#b8407d',
            },
          },
        },
      },
    },
  },
});

export default theme;
