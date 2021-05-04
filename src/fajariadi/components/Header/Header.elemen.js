import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const HeaderTag = styled.header`
  min-height: calc(100vh - 100px);
  background-color: ${colors.green};
`;

export const Container = styled(StyledContainer)`
  /* background-color: red; */
  padding-top: 30px;
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
    height: 550px;
    object-fit: cover;
  }
`;

export const Typography = styled.div`
  position: absolute;
  width: 100%;
  max-width: 533px;
  left: 0;
  bottom: 0;

  & > p {
    margin: 20px 0 40px;
  }

  & > h1 {
    color: ${colors.white};
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
`;
