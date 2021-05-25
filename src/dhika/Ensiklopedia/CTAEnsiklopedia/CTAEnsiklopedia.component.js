import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style/index';

export const Container = styled(StyledContainer)`
  background: ${colors.darkGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  & > div {
    width: 100%;
    max-width: 600px;
    margin-right: 20px;

    & > h2 {
      color: white;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1200px) {
    & > div {
      max-width: 450px;
    }
  }

  @media (max-width: 900px) {
    padding: 30px;

    & > div {
      max-width: 400px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: unset;
    padding: 20px;

    & > div {
      margin-right: unset;
      margin-bottom: 20px;
    }
  }
`;

export const SectionCTAE = styled.section`
  margin-top: 100px;
  background-color: ${colors.green};
  padding: 50px 0;
`;
