import React from 'react';
import { Container, SectionCTAE } from './CTAEnsiklopedia.component';
import Button from '../../../master/components/additional/Button';
import { colors } from '../../../master/constant/style/index';

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

        <Button primary cta text='Beli Sekarang!' bgColor={colors.yellow} />
      </Container>
    </SectionCTAE>
  );
};

export default CTAEnsiklopedia;
