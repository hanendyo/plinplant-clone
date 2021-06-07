import React, { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { transactions } from '../../../master/constant/data/dummy-data';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { Container, TransactionSection } from './Transaction.elemen';

const Transaction = () => {
  const { invoiceState, invoiceDispatch } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  // !::: STACK OVERFLOW SOURCE -> https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript :::
  const key = 'pk_invoice_id';
  const uniqueTransaction = [
    ...new Map(invoiceState.map((item) => [item[key], item])).values(),
  ];

  console.log('UNIQQQQ', uniqueTransaction);

  useEffect(() => {
    if (uniqueTransaction.length < 3) setScroll(false);
    if (uniqueTransaction.length > 2) setScroll(true);
  }, [uniqueTransaction]);

  return (
    <TransactionSection>
      <Container>
        <h2>Daftar Transaksi (4)</h2>

        <ProductsContainer transaction uniqueTransaction={uniqueTransaction} />

        {scroll && <ScrollSign center />}
      </Container>
    </TransactionSection>
  );
};

export default Transaction;
