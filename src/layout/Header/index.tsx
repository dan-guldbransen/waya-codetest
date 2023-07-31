import React, { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import WayaLogo from '../../svg/Logo';
import { text } from './style';

const Header = () => (
  <Box sx={{ flexGrow: 1, position: 'relative', height: '100%' }}>
    <AppBar position='static'>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WayaLogo />
        <Box sx={text}>
          <Typography variant='h1' component={'h1'}>
            Invoice App
          </Typography>
          <Typography variant='h2' component={'h2'}>
            a codetest by Dan Guldbransen
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default memo(Header);
