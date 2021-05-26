import React from 'react';
import { Container, SectionCTAE } from './CTAEnsiklopedia.component';
import Button from '../../../master/components/additional/Button';
import { colors } from '../../../master/constant/style/index';
import { Link } from 'react-router-dom';

const CTAEnsiklopedia = () => {
  return (
    <SectionCTAE>
      <Container>
        <div>
          <h2>Lorem Ipsum Dolor Sit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt
            illum neque soluta voluptate aperiam hic explicabo quibusdam
            provident molestias?
          </p>
        </div>

        <a href='/shop'>
          <Button primary cta text='Beli Sekarang!' bgColor={colors.yellow} />
        </a>
      </Container>
    </SectionCTAE>
  );
};

export default CTAEnsiklopedia;
