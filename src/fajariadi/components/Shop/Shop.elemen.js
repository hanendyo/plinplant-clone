import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`;

export const RelatedProduct = styled.section`
  background-color: ${colors.darkGreen};
  width: fit-content;
  padding: 20px 10px;
  border-radius: 20px;
  height: 550px;
  margin-bottom: 20px;

  & > h5 {
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.white};
  }
`;

export const ReviewContainer = styled.section`
  background-color: ${colors.darkGreen};
  width: 350px;
  padding: 20px 15px 15px 5px;
  border-radius: 20px;
  height: 550px;

  & > h5 {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 10px;
  }
`;
