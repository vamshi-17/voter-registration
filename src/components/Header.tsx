import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
