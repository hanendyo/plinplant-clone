import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style/index';

export const StyledHeader = styled.header`
  background-color: ${colors.green};
`;

export const Container = styled(StyledContainer)`
  padding: 30px 0 150px;
  position: relative;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  margin-right: 50px;

  & > img {
    width: 750px;
    min-width: 400px;
    border-radius: 10px;
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 500px;

  & > h1,
  h5 {
    color: ${colors.white};
  }

  & > h1 {
    margin-bottom: 30px;
  }

  & > p {
    padding: unset;
    margin-bottom: 20px;
  }
`;

export const BoxGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: -120px;
  right: 0;
  /* @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 10px;
    height: 500px;
  } */
`;

export const Box = styled.div`
  background-color: ${colors.yellow};
  color: ${colors.green};
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-left: 24px;

  & > div {
    margin-bottom: 20px;
  }

  & > p {
    font-size: 24px;
    padding: unset;
  }

  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  } */
`;
