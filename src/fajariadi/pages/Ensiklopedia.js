import React from "react";
import Navbar from "../../master/components/Navbar/Navbar";
import { Header } from "../../dhika/Ensiklopedia/";
import { Body } from "../../dhika/Ensiklopedia/";
import { CTAEnsiklopedia } from "../../dhika/Ensiklopedia/";
import { RelatedProduct } from "../../dhika/Ensiklopedia/";
import Footer from "../../master/components/Footer/Footer";

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
