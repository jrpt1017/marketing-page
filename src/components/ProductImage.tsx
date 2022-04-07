import React from 'react'
import { Box } from '@mui/material';

interface IProductImage {
  productColor: string,
}

const ProductImage: React.FC<IProductImage> = (props: IProductImage) => {
  const { productColor } = props;

  const imgSrc = productColor === 'black' ? '/black_headset.jpg' : '/brown_headset.jpg';

  return (
    <Box
      sx={{
        width: '50%',
        height: '50%',
        margin: 'auto',
      }}
      component="img"
      src={imgSrc}
    />
  )
};

export default ProductImage;
