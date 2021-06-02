import React, { useContext, useEffect, useState } from 'react';
import {
  HeaderComponent,
  Header,
  NewsContainer,
  News,
  Main,
} from './ArtikelHeader.component';
import image from '../images/cherrytomatomature.jpg';
import { FaArrowDown, FaCircle } from 'react-icons/fa';
import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';
import { articles } from '../../../master/constant/data/dummy-data';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { ContextStore } from '../../../context/store/ContextStore';

const NewsHeader = () => {
  const [scroll, setScroll] = useState(true);

  const { articleIdState } = useContext(ContextStore);
  const {
    title,
    author,
    created_at,
    duration,
    source,
    url,
    content,
    article_image,
  } = articleIdState;

  useEffect(() => {
    if (articles.length < 4) setScroll(false);
    if (articles.length > 3) setScroll(true);
  }, [articles]);

  return (
    <Main>
      <News>
        <HeaderComponent>
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/article_image/${articleIdState?.article_image}`
            }
            alt={title}
          />

          <Header>
            <h2>{title}</h2>

            <span>
              Oleh <strong>{author}</strong>
            </span>

            <p>
              {created_at} <FaCircle size={7} className='circle' /> {duration}
            </p>

            <p>
              Sumber:{' '}
              <a href={url} target='_blank'>
                <em>{source}</em>
              </a>
            </p>

            <p>{content}</p>
          </Header>
        </HeaderComponent>

        <NewsContainer>
          <h4>Artikel Lain</h4>

          <ProductsContainer article />

          {scroll && <ScrollSign center />}
        </NewsContainer>
      </News>
    </Main>
  );
};

export default NewsHeader;
