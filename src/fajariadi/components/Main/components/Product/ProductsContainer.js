import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ItemsCarousel from 'react-items-carousel';
import Cards from '../../../../../master/components/additional/Cards';
import { products } from '../../../../../master/constant/data/dummy-data';
import { colors } from '../../../../../master/constant/style';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const ProductsContainer = ({ category }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  // const isLargeScreen = useMediaQuery({ minWidth: 1440 });
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
            <Cards name={name} img={img} key={index} />
          ))}
      </ItemsCarousel>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-bottom: 30px;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 10px;
  }
`;

export default ProductsContainer;
