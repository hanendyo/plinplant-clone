import styled from 'styled-components';
import { StyledContainer } from '../../../../../master/constant/style';

export const Container = styled(StyledContainer)`
  & > h2 {
    margin: 50px 0;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  @media (max-width: 900px) {
    & > div {
      flex-wrap: wrap;
      justify-content: center;

      & > div {
        margin: 20px;
      }
    }
  }
`;
