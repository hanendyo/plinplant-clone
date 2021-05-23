import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const CartSection = styled.main`
  background-color: ${colors.green};
  padding-top: 130px;
  min-height: 100vh;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }
`;

export const Container = styled(StyledContainer)`
  & > h2 {
    color: ${colors.white};
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    & > div {
      flex-direction: column;
    }
  }
`;

export const ListCart = styled.section`
  width: 100%;
  /* background-color: red; */
`;
