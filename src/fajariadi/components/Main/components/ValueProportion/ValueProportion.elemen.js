import styled from 'styled-components';
import { StyledContainer } from '../../../../../master/constant/style';

export const Container = styled(StyledContainer)`
  & > h2 {
    margin: 50px;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
`;
