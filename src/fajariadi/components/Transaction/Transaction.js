import React, { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { transactions } from '../../../master/constant/data/dummy-data';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container, TransactionSection } from './Transaction.elemen';

const Transaction = () => {
  const { invoiceState, invoiceDispatch } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  const uniqueTransaction = invoiceState
    .map((invoice) => invoice.pk_invoice_id)
    .filter((item, index, arr) => arr.indexOf(item) === index);
  console.log('UNIQQQQ', uniqueTransaction);

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
