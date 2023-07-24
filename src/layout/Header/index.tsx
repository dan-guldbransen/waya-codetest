import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WayaLogo from '../../svg/Logo';

const Header = () => (
  <Box sx={{ flexGrow: 1, position: 'relative' }}>
    <AppBar
      sx={{
        position: 'relative',
        width: '100%',
        height: 200,
        p: 4,
      }}
    >
      <WayaLogo />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography variant='h1' component={'h1'}>
          Invoice App
        </Typography>
        <Typography variant='h3' component={'h3'}>
          a codetest by Dan Guldbransen
        </Typography>
      </Box>
    </AppBar>
  </Box>
);

export default Header;
