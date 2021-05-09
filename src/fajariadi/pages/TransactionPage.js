import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Transaction from '../components/Transaction/Transaction';

const TransactionPage = () => {
  return (
    <>
      <Navbar />
      <Transaction />
      <Footer colored />
    </>
  );
};

export default TransactionPage;
