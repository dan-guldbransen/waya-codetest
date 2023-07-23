import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='header'
          sx={{ ml: 0 }}
        ></IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Invoices
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;