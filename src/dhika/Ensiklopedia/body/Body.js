import React from 'react';
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
import seed from '../../images/basil-seed.png';
import tuber from '../../images/basil-tuber.jpg';
import juvenil from '../../images/basil-juvenil.jpg';
import mature from '../../images/basil-mature.jpg';

const Body = () => {
  return (
    <section>
      <Container>
        <h2>Plant Breeding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
          cupiditate vitae ullam! Doloremque quaerat numquam ipsam vitae, ea
          non?
        </p>

        <Breeding>
          <BoxContainer>
            <Textbox>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                deleniti assumenda molestias temporibus veritatis amet fugiat
                alias magni obcaecati iure.
              </p>
            </Textbox>
            <SquareLeft />
          </BoxContainer>

          <FaCircle className='circle' />

          <ImageCointainer>
            <img src={seed} alt='seed' />
            <div>
              <h5>Proses Penanaman Benih</h5>
            </div>
          </ImageCointainer>
        </Breeding>

        <Breeding>
          <ImageCointainer>
            <img src={tuber} alt='tuber' />
            <div>
              <h5>Masa Pertumbuhan Bonggol</h5>
            </div>
          </ImageCointainer>

          <FaCircle className='circle' />

          <BoxContainer>
            <SquareRight />
            <Textbox>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                deleniti assumenda molestias temporibus veritatis amet fugiat
                alias magni obcaecati iure.
              </p>
            </Textbox>
          </BoxContainer>
        </Breeding>

        <Breeding>
          <BoxContainer>
            <Textbox>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                deleniti assumenda molestias temporibus veritatis amet fugiat
                alias magni obcaecati iure.
              </p>
            </Textbox>
            <SquareLeft />
          </BoxContainer>

          <FaCircle className='circle' />

          <ImageCointainer>
            <img src={juvenil} alt='juvenil' />
            <div>
              <h5>Masa Tanaman Muda</h5>
            </div>
          </ImageCointainer>
        </Breeding>

        <Breeding>
          <ImageCointainer>
            <img src={mature} alt='mature' />
            <div>
              <h5>Masa Tanaman Dewasa</h5>
            </div>
          </ImageCointainer>

          <FaCircle className='circle' />

          <BoxContainer>
            <SquareRight />
            <Textbox>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                deleniti assumenda molestias temporibus veritatis amet fugiat
                alias magni obcaecati iure.
              </p>
            </Textbox>
          </BoxContainer>
        </Breeding>
      </Container>
    </section>
  );
};

export default Body;
