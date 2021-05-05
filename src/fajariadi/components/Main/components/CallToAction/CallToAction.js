import React from 'react';
import Button from '../../../../../master/components/additional/Button';
import { colors } from '../../../../../master/constant/style';
import { Container, SectionCTA } from './CallToAction.elemen';
import { cta } from '../../../../assets/illustration';

const CallToAction = () => {
  return (
    <SectionCTA>
      <Container>
        <div>
          <h2>Lorem ipsum dolor sit</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <Button primary cta text='Gabung Sekarang' bgColor={colors.green} />
        </div>

        <div>
          <img src={cta} alt='' />
        </div>
      </Container>
    </SectionCTA>
  );
};

export default CallToAction;
