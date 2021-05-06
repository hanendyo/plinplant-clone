import React from 'react';
import styled from 'styled-components';
import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';
import { colors, StyledContainer } from '../../../master/constant/style';

const RelatedProduct = () => {
  return (
    <SectionRP>
      <Container>
        <ProductsContainer slider category='hias' />
      </Container>
    </SectionRP>
  );
};

const SectionRP = styled.section`
  background-color: ${colors.green};
  padding-bottom: 50px;
`;

const Container = styled(StyledContainer)``;

export default RelatedProduct;
