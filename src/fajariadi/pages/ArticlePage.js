import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import ArtikelHeader from '../../dhika/Artikel/header/ArtikelHeader';

const ArticlePage = () => {
  return (
    <>
      <Navbar />
      <ArtikelHeader />
      <Footer colored />
    </>
  );
};

export default ArticlePage;
