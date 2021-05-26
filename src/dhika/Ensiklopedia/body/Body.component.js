import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style/index';

export const Container = styled(StyledContainer)`
  margin-top: 10rem;
  position: relative;

  & > h2 {
    text-align: center;
  }

  & > p {
    text-align: center;
    color: ${colors.black};
    padding: unset;
    width: 100%;
    max-width: 700px;
    margin: 20px auto 50px;
  }

  &::before {
    content: '';
    width: 5px;
    height: 72%;
    background-color: ${colors.yellow};
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
  }

  @media (max-width: 760px) {
    margin-top: 5rem;

    &::before {
      left: 10%;
    }
  }
`;

export const Breeding = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;

  & > .circle {
    margin: 0 20px;
    font-size: 80px;
    width: 70px;
    color: ${colors.green};
    z-index: 1;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    /* align-items: flex-end; */
    padding-left: 100px;

    &:nth-of-type(odd) {
      flex-direction: column-reverse;
    }

    & > .circle {
      position: absolute;
      left: 0;
      top: 0;
      margin: unset;
      font-size: 70px;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Textbox = styled.div`
  background-color: ${colors.green};
  color: ${colors.white};
  width: 100%;
  max-width: 400px;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;

  & > h5 {
    color: white;
  }

  @media (max-width: 760px) {
    border-radius: 0 0 10px 10px;
    padding: 5px 20px 20px;
    max-width: 420px;

    & > h5 {
      margin-bottom: 10px;
    }
  }
`;

export const SquareLeft = styled.div`
  position: absolute;
  top: 15px;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);

  @media (max-width: 760px) {
    display: none;
  }
`;

export const SquareRight = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ImageCointainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  & > img {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px 20px 20px;
    background: linear-gradient(to top, #111, #11111100);

    & > h5 {
      color: ${colors.white};
    }
  }

  @media (max-width: 760px) {
    background-color: ${colors.green};
    padding: 10px 10px 0;
    border-radius: 10px 10px 0 0;
    overflow: unset;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: -5px;
      width: 50px;
      height: 50px;
      background-color: ${colors.green};
      transform: rotate(45deg);
    }

    & > img {
      border-radius: 10px;
      position: relative;
      z-index: 1;
    }

    & > div {
      display: none;
    }
  }
`;
