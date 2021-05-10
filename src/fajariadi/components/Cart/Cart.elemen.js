import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

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
`;

export const ListCart = styled.section`
  width: 100%;
  /* max-width: 700px; */
`;
