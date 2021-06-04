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
    const getInvoice = async () => {
      const res = await axios.get(
        'http://localhost:5000/input/invoice/1/1622764848807'
      );

      invoiceDispatch(getInvoiceDetails(res.data.data));
    };

    getInvoice();
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
