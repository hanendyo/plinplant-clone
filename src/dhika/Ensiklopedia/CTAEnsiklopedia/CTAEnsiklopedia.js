import React, { useContext, useEffect, useState } from 'react';
import { Container, SectionCTAE } from './CTAEnsiklopedia.component';
import Button from '../../../master/components/additional/Button';
import { colors } from '../../../master/constant/style/index';
import { Link } from 'react-router-dom';

const CTAEnsiklopedia = ({ id, name }) => {
  const slug = (title) => title?.toLowerCase().split(' ').join('-');

  return (
    <SectionCTAE>
      <Container>
        <div>
          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt
            illum neque soluta voluptate aperiam hic explicabo quibusdam
            provident molestias?
          </p>
        </div>

        <Link to={`/shop/${id}/${slug(name)}`}>
          <Button primary cta text='Beli Sekarang!' bgColor={colors.yellow} />
        </Link>
      </Container>
    </SectionCTAE>
  );
};

export default CTAEnsiklopedia;
