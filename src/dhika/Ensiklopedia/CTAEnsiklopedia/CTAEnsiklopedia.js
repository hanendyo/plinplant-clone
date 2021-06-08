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
          <h2>Tertarik untuk membeli {name}?</h2>
          <p>
            Bagaimana pengalaman kamu melihat pertumbuhan tanaman {name} ini?
            Apakah kamu tertarik untuk merawatnya? Yuk, klik tombol Beli
            Sekarang dan nantikan tanaman ini sampai kerumahmu.
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
