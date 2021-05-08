import React from 'react';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container, ListCart } from './Cart.elemen';

const Cart = () => {
  return (
    <main
      style={{
        backgroundColor: colors.green,
        paddingTop: 30,
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      <Container>
        <h2>Keranjang</h2>

        <div>
          <ListCart>
            <ProductsContainer cart />
          </ListCart>

          <ShoppingSummary />
        </div>
      </Container>
    </main>
  );
};

export default Cart;
