import React from 'react';
import { Container } from './ValueProportion.elemen';
import { valueProps } from '../../../../../master/constant/data/dummy-data';
import Cards from '../../../../../master/components/additional/Cards';

const ValueProportion = () => {
  return (
    <section>
      <Container>
        <h2>Mengapa PlinPlant</h2>

        <div>
          {valueProps.map(({ name, img }, index) => (
            <Cards illustration name={name} img={img} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValueProportion;
