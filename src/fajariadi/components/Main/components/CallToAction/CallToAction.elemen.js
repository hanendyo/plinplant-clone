import styled from 'styled-components';
import { colors, StyledContainer } from '../../../../../master/constant/style';

export const SectionCTA = styled.section`
  background-color: ${colors.yellowTransparent};
  margin: 50px 0;

  @media (max-width: 760px) {
    padding: 50px 0;
  }
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
    }
  }

  & > div:nth-of-type(2) {
    & > img {
      max-width: 400px;
      /* min-width: 300px; */
    }
  }

  @media (max-width: 900px) {
    & > div:nth-of-type(2) {
      & > img {
        max-width: 300px;
      }
    }
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: unset;

    & > div:nth-of-type(1) {
      margin-right: unset;
    }

    & > div:nth-of-type(2) {
      & > img {
        max-width: 100%;
        margin-bottom: 30px;
        /* min-width: 300px; */
      }
    }
  }
`;
