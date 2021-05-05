import styled from 'styled-components';
import { colors, StyledContainer } from '../../../../../master/constant/style';

export const SectionCTA = styled.section`
  background-color: ${colors.yellowTransparent};
  margin-bottom: 50px;
`;

export const Container = styled(StyledContainer)`
  min-height: 400px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:nth-of-type(1) {
    margin-right: 100px;
    width: 100%;
    max-width: 600px;

    & > p {
      color: ${colors.black};
      margin: 10px 0 40px;
      padding: unset;
    }
  }

  & > div:nth-of-type(2) {
    & > img {
      max-width: 400px;
      /* min-width: 300px; */
    }
  }
`;
