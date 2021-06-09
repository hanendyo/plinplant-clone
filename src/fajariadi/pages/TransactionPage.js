import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { getInvoices } from '../../context/actions';
import { getTransactions } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Transaction from '../components/Transaction/Transaction';

const TransactionPage = ({ match }) => {
  const { invoiceState, transactionDispatch } = useContext(ContextStore);

  useEffect(() => {
    transactionDispatch(getTransactions(match));

    window.scrollTo({ top: 0 });
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
