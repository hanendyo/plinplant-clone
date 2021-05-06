import React from 'react';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container, RelatedProduct } from './Shop.elemen';

const Shop = () => {
  return (
    <main style={{ backgroundColor: colors.green, minHeight: '100vh' }}>
      <Container>
        <RelatedProduct>
          <h5>Tanaman Terkait</h5>
          <ProductsContainer scroll category='hias' />
        </RelatedProduct>

        <div></div>

        <div></div>
      </Container>
    </main>
  );
};

export default Shop;
