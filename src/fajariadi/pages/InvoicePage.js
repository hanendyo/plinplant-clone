import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getInvoiceDetails } from '../../context/actions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Invoice from '../components/Invoice/Invoice';
import Loader from '../components/Loader';

const InvoicePage = ({ match }) => {
  const { invoiceState, invoiceDispatch } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    invoiceDispatch(getInvoiceDetails(match));

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Invoice />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default InvoicePage;
