import React from 'react';
import Navbar from '../../master/components/Navbar/Navbar';
import {
  Header,
  Body,
  CTAEnsiklopedia,
  RelatedProduct,
} from '../../dhika/component/';
import Footer from '../../master/components/Footer/Footer';

const Ensiklopedia = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <CTAEnsiklopedia />
      <RelatedProduct />
      <Footer colored />
    </>
  );
};

export default Ensiklopedia;
