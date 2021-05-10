import React from 'react';
import {
  HeaderComponent,
  Header,
  NewsContainer,
  News,
  Main,
} from './ArtikelHeader.component';
import image from '../images/cherrytomatomature.jpg';
import { FaCircle } from 'react-icons/fa';
import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';

const NewsHeader = () => {
  return (
    <Main>
      <News>
        <HeaderComponent>
          <img src={image} alt='News' />

          <Header>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quae.
            </h2>

            <span>
              Oleh <strong>Author</strong>
            </span>

            <p>
              30 April 2021 <FaCircle size={7} className='circle' /> 3 menit
              baca
            </p>

            <p>
              Sumber: <em>KOMPAS.COM</em>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deleniti fuga ab tempora? Obcaecati dignissimos velit aliquid
              blanditiis eum doloribus nostrum quae corporis harum minima id,
              saepe temporibus non hic doloremque voluptates illum voluptate
              atque. Optio officia maxime aliquam vel, voluptas suscipit
              explicabo magnam veritatis minus? Labore enim fuga ab.
            </p>
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deleniti fuga ab tempora? Obcaecati dignissimos velit aliquid
              blanditiis eum doloribus nostrum quae corporis harum minima id,
              saepe temporibus non hic doloremque voluptates illum voluptate
              atque. Optio officia maxime aliquam vel, voluptas suscipit
              explicabo magnam veritatis minus? Labore enim fuga ab.
            </p>
          </Header>
        </HeaderComponent>

        <NewsContainer>
          <h4>Artikel Lain</h4>

          <ProductsContainer article />
        </NewsContainer>
      </News>
    </Main>
  );
};

export default NewsHeader;
