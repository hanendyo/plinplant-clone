import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const TransactionSection = styled.main`
  background-color: ${colors.green};
  padding-top: 130px;
  min-height: 100vh;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }

  @media (max-width: 900px) {
    min-height: calc(100vh - 180px);
  }
`;

export const Container = styled(StyledContainer)`
  & > h2 {
    color: ${colors.white};
    margin-bottom: 30px;
  }
`;
