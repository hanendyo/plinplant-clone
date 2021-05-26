import React from 'react';
import CallToAction from './components/CallToAction/CallToAction';
import Product from './components/Product/Product';
import ValueProportion from './components/ValueProportion/ValueProportion';

const Main = () => {
  return (
    <main>
      <Product />
      <ValueProportion />
      <CallToAction />
    </main>
  );
};

export default Main;
