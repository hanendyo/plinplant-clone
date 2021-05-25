import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Invoice from '../components/Invoice/Invoice';

const InvoicePage = () => {
  return (
    <>
      <Navbar />
      <Invoice />
      <Footer colored />
    </>
  );
};

export default InvoicePage;
