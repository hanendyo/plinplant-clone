import React, { useEffect, useState } from 'react';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { transactions } from '../../../master/constant/data/dummy-data';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container, TransactionSection } from './Transaction.elemen';

const Transaction = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (transactions.length < 3) setScroll(false);
    if (transactions.length > 2) setScroll(true);
  }, [transactions]);

  return (
    <TransactionSection>
      <Container>
        <h2>Daftar Transaksi (4)</h2>

        <ProductsContainer transaction />

        {scroll && <ScrollSign center />}
      </Container>
    </TransactionSection>
  );
};

export default Transaction;
