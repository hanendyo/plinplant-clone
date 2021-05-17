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

    & > p {
      padding: unset;
    }

    & > h2 {
      color: white;
      margin-bottom: 20px;
    }
  }
`;

export const SectionCTAE = styled.section`
  margin-top: 100px;
  background-color: ${colors.green};
  padding: 50px 0;
`;
