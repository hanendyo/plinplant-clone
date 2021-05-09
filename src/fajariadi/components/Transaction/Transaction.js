import React from 'react';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container } from './Transaction.elemen';

const Transaction = () => {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: colors.green,
        paddingTop: 30,
      }}
    >
      <Container>
        <h2>Daftar Transaksi (4)</h2>

        <ProductsContainer transaction />
      </Container>
    </main>
  );
};

export default Transaction;
