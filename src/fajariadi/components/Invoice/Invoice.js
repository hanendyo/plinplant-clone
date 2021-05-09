import React from 'react';
import { colors } from '../../../master/constant/style';
import { Container } from './Invoice.elemen';

const Invoice = () => {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: colors.green,
        paddingTop: 30,
      }}
    >
      <Container>
        <h2>Invoice</h2>
      </Container>
    </main>
  );
};

export default Invoice;
