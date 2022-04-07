import React from 'react';
import { Box } from '@mui/material';
import ProductDetail from './components/ProductDetail'
import ProductImage from './components/ProductImage'
import './App.css';

const App = () => {
  const [productColor, setProductColor] = React.useState('black');

  return (
    <Box
      display="flex"
      sx={{
        height: '100vh',
      }}
    >
      <ProductDetail
        productColor={productColor}
        setProductColor={setProductColor}
      />
      <ProductImage productColor={productColor} />
    </Box>
  );
}

export default App;
