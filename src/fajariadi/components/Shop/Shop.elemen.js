import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const RelatedProduct = styled.section`
  background-color: ${colors.darkGreen};
  width: fit-content;
  padding: 20px 10px;
  border-radius: 20px;
  max-height: 550px;

  & > h5 {
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.white};
  }
`;

export const Container = styled(StyledContainer)``;
