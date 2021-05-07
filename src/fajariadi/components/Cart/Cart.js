import React from 'react';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container } from './Cart.elemen';

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
          <section>
            <ProductsContainer cart />
          </section>

          <section></section>
        </div>
      </Container>
    </main>
  );
};

export default Cart;
