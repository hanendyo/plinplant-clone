import styled from 'styled-components';
import { colors, StyledContainer } from '../../../../../master/constant/style';

export const SectionProduct = styled.section`
  background-color: ${colors.green};
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const Container = styled(StyledContainer)`
  /* background-color: red; */
`;

export const SearchBar = styled.div`
  background-color: ${colors.lightGreenTransparent};
  width: 100%;
  max-width: 700px;
  padding: 30px;
  border-radius: 20px 20px 0 0;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    align-items: center;

    & > input {
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      padding: 10px 15px;
      border-radius: 10px 0 0 10px;
      border: none;
      outline: none;
    }

    & > div {
      background-color: ${colors.white};
      color: ${colors.green};
      padding: 10px 15px;
      border-radius: 0 10px 10px 0;
      transition: all 0.3s ease;
    }
  }
`;

export const ProductSlider = styled.div`
  background-color: ${colors.darkGreen};
  padding: 50px 100px;
  border-radius: 0 20px 20px 20px;
`;
