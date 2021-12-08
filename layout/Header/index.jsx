import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>dd</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>ee</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
