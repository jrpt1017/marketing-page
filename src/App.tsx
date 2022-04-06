import React from 'react';
import { Box } from '@mui/material';
import ProductDetail from './components/ProductDetail'
import ProductImage from './components/ProductImage'
import './App.css';

const App = () => {
  return (
    <Box
      display="flex"
      sx={{
        padding: '50px'
      }}
    >
      <ProductDetail />
      <ProductImage />
    </Box>
  );
}

export default App;
