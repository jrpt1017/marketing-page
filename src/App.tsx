import React from 'react';
import { Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Box
      display="flex"
      sx={{
        width: '100%'
      }}
    >
      <Box>Left</Box>
      <Box>Right</Box>
    </Box>
  );
}

export default App;
