import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ItemsCarousel from 'react-items-carousel';
import Cards from '../../../../../master/components/additional/Cards';
import {
  cartItems,
  products,
  reviews,
} from '../../../../../master/constant/data/dummy-data';
import { colors } from '../../../../../master/constant/style';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const ProductsContainer = ({ category, slider, scroll, cart, review }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  const isMediumScreen = useMediaQuery({ minWidth: 1200 });
  const isIpadPro = useMediaQuery({ minWidth: 990 });
  const isIpad = useMediaQuery({ minWidth: 768 });
  const isPhone = useMediaQuery({ maxWidth: 768 });

  const numberOfCards = () => {
    if (isMediumScreen) return 5;
    if (isIpadPro) return 4;
    if (isIpad) return 3;
    if (isPhone) return 2;
  };

  const categoryName = (category) => {
    if (category === 'hias') return 'Tanaman Hias';
    if (category === 'sayur') return 'Sayuran Hijau';
    if (category === 'rempah') return 'Rempah';
    if (category === 'buah') return 'Buah';
  };

  return (
    <>
      {slider && (
        <CardContainer>
          <h4>{categoryName(category)}</h4>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={numberOfCards()}
            gutter={5}
            leftChevron={<FaChevronLeft />}
            rightChevron={<FaChevronRight />}
            outsideChevron
            chevronWidth={chevronWidth}
            // infiniteLoop
          >
            {products
              .filter((item) => category === item.category)
              .map(({ name, img }, index) => (
                <Cards slider name={name} img={img} key={index} />
              ))}
          </ItemsCarousel>
        </CardContainer>
      )}

      {scroll && (
        <ShopRelated>
          {products
            .filter((item) => category === item.category)
            .map(({ name, img }, index) => (
              <Cards scroll name={name} img={img} key={index} />
            ))}
        </ShopRelated>
      )}

      {review && (
        <ReviewContainer>
          {reviews.map(({ name, created, text, img, rating }, index) => (
            <Cards
              review
              name={name}
              created={created}
              text={text}
              rating={rating}
              img={img}
              key={index}
            />
          ))}
        </ReviewContainer>
      )}

      {cart && (
        <CartContainer>
          {cartItems.map(({ img, name, phase, price, quantity }) => (
            <Cards
              cart
              img={img}
              name={name}
              phase={phase}
              price={price}
              quantity={quantity}
            />
          ))}
        </CartContainer>
      )}
    </>
  );
};

const CardContainer = styled.article`
  margin-bottom: 30px;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 10px;
  }
`;

const ShopRelated = styled.div`
  /* background-color: red; */
  width: fit-content;
  border-radius: 10px;
  max-height: 480px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewContainer = styled.div`
  /* background-color: red; */
  height: 480px;
  padding: 8px 0 0 8px;
  border-radius: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartContainer = styled.div`
  /* background-color: red; */
  border-radius: 10px;
  height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ProductsContainer;
