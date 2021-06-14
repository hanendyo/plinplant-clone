import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getInvoices } from '../../context/actions';
import { getTransactions } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Loader from '../components/Loader';
import Transaction from '../components/Transaction/Transaction';

const TransactionPage = ({ match }) => {
  const { invoiceState, transactionDispatch } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    transactionDispatch(getTransactions(match));

    window.scrollTo({ top: 0 });

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // console.log('TRANSACTION', invoiceState);
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Transaction />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default TransactionPage;
