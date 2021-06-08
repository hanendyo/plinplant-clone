import React, { useContext } from 'react';
import {
  Textbox,
  Breeding,
  SquareLeft,
  SquareRight,
  BoxContainer,
  ImageCointainer,
  Container,
} from './Body.component';
import { FaCircle } from 'react-icons/fa';
import { ContextStore } from '../../../context/store/ContextStore';

const Body = () => {
  const { plantIdState } = useContext(ContextStore);
  const {
    plant_name,
    seed,
    tuber,
    young,
    mature,
    seed_image,
    tuber_image,
    young_image,
    mature_image,
  } = plantIdState;

  return (
    <section>
      <Container>
        <h2>Proses Pemeliharaan Tanaman</h2>
        <p>
          Setiap fase dari suatu tanaman itu memiliki perlakuan yang
          berbeda-beda dalam proses pemeliharaannya. Kira-kira apa saja ya
          proses pemeliharaan dari tanaman {plant_name} ini? Yuk kita lihat
          perjalanan tanaman ini dari biji sampai tumbuh dewasa.
        </p>

        <Breeding>
          <BoxContainer>
            <Textbox>
              <h5>Proses Penanaman Benih</h5>
              <p>{seed}</p>
            </Textbox>
            <SquareLeft />
          </BoxContainer>

          <FaCircle className='circle' />

          <ImageCointainer>
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${seed_image}`}
              alt='seed'
            />
            <div>
              <h5>Proses Penanaman Benih</h5>
            </div>
          </ImageCointainer>
        </Breeding>

        <Breeding>
          <ImageCointainer>
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${tuber_image}`}
              alt='tuber'
            />
            <div>
              <h5>Masa Pertumbuhan Bonggol</h5>
            </div>
          </ImageCointainer>

          <FaCircle className='circle' />

          <BoxContainer>
            <SquareRight />
            <Textbox>
              <h5>Masa Pertumbuhan Bonggol</h5>
              <p>{tuber}</p>
            </Textbox>
          </BoxContainer>
        </Breeding>

        <Breeding>
          <BoxContainer>
            <Textbox>
              <h5>Masa Tanaman Muda</h5>
              <p>{young}</p>
            </Textbox>
            <SquareLeft />
          </BoxContainer>

          <FaCircle className='circle' />

          <ImageCointainer>
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${young_image}`}
              alt='juvenil'
            />
            <div>
              <h5>Masa Tanaman Muda</h5>
            </div>
          </ImageCointainer>
        </Breeding>

        <Breeding>
          <ImageCointainer>
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${mature_image}`}
              alt='mature'
            />
            <div>
              <h5>Masa Tanaman Dewasa</h5>
            </div>
          </ImageCointainer>

          <FaCircle className='circle' />

          <BoxContainer>
            <SquareRight />
            <Textbox>
              <h5>Masa Tanaman Dewasa</h5>
              <p>{mature}</p>
            </Textbox>
          </BoxContainer>
        </Breeding>
      </Container>
    </section>
  );
};

export default Body;
