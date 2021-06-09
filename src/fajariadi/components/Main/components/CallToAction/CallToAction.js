import React from 'react';
import Button from '../../../../../master/components/additional/Button';
import { colors } from '../../../../../master/constant/style';
import { Container, SectionCTA } from './CallToAction.elemen';
import { cta } from '../../../../assets/illustration';
import { useHistory } from 'react-router-dom';

const CallToAction = () => {
  const history = useHistory();

  return (
    <SectionCTA>
      <Container>
        <div>
          <h2>Dapatkan fitur lainnya!</h2>

          <p>
            Dengan mendaftarkan diri anda, kamu bisa membeli tanaman favoritmu,
            notifikasi pada pesanan, berita terbaru seputar tanaman, dan masih
            banyak lagi!
          </p>

          <Button
            onClick={() => history.push('/register')}
            primary
            cta
            text='Gabung Sekarang'
            bgColor={colors.green}
          />
        </div>

        <div>
          <img src={cta} alt='' />
        </div>
      </Container>
    </SectionCTA>
  );
};

export default CallToAction;
