import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { getInvoices } from '../../context/actions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Transaction from '../components/Transaction/Transaction';

const TransactionPage = () => {
  const { invoiceState, invoiceDispatch } = useContext(ContextStore);

  useEffect(() => {
    // ::: FETCH INVOICE :::
    const getInvoiceData = async () => {
      const res = await axios.get('http://localhost:5000/input/invoice');

      invoiceDispatch(getInvoices(res.data.data));
    };

    getInvoiceData();
  }, []);

  console.log('TRANSACTION', invoiceState);
  return (
    <div>
      <Navbar />
      <Transaction />
      <Footer colored />
    </div>
  );
};

export default TransactionPage;
