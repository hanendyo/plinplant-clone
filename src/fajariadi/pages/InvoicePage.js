import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getInvoiceDetails } from '../../context/actions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Invoice from '../components/Invoice/Invoice';

const InvoicePage = ({ match }) => {
  const { invoiceState, invoiceDispatch } = useContext(ContextStore);
  const [fetch, setfetch] = useState([]);

  useEffect(() => {
    // :: STATIC ID & ORDER PARAMS
    invoiceDispatch(getInvoiceDetails());
  }, []);

  console.log('DETAILLSSS', invoiceState);

  return (
    <div>
      <Navbar />
      <Invoice />
      <Footer colored />
    </div>
  );
};

export default InvoicePage;
