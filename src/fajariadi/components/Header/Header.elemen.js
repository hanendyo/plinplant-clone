import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const HeaderTag = styled.header`
  min-height: 100vh;
  background-color: ${colors.green};

  @media (max-width: 1200px) {
    min-height: fit-content;
    padding-bottom: 5rem;
  }

  @media (max-width: 760px) {
    min-height: 100vh;
  }
`;

export const Container = styled(StyledContainer)`
  /* background-color: red; */

  padding-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  //image kiri
  & > img:first-of-type {
    min-width: 300px;
    margin-right: 50px;
    object-fit: contain;
  }

  // image kanan
  & > img:nth-of-type(2) {
    width: 860px;
    min-width: 400px;
    height: 550px;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    & > img:first-of-type {
      min-width: 200px;
      margin-right: 30px;
    }

    & > img:nth-of-type(2) {
      min-width: 300px;
      height: 450px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    padding-top: 100px;

    & > img:first-of-type {
      max-width: 500px;
      width: 100%;
      margin-right: unset;
      margin-bottom: 10px;
    }

    & > img:nth-of-type(2) {
      display: none;
    }
  }
`;

export const Typography = styled.div`
  position: absolute;
  width: 100%;
  max-width: 533px;
  left: 0;
  bottom: 0;

  & > p {
    margin: 20px 0 30px;
    padding: unset;
  }

  & > h1 {
    color: ${colors.white};
  }

  @media (max-width: 900px) {
    max-width: 400px;
  }

  @media (max-width: 760px) {
    position: unset;

    & > p {
      margin: 10px 0 20px;
    }
  }
`;

export const ScrollBtn = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.lightGreenTransparent};
  width: fit-content;
  padding: 10px 30px 10px 10px;
  border-radius: 30px;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    padding: 8px;
    border-radius: 50%;
    margin-right: 15px;
  }

  & > p {
    padding: unset;
  }

  @media (max-width: 760px) {
    /* display: none; */
  }
`;
