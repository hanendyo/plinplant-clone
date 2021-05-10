import styled from "styled-components";
import { colors, StyledContainer } from "../../../master/constant/style/index";

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
    content: "";
    width: 5px;
    height: 72%;
    background-color: ${colors.yellow};
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
  }
`;

export const Breeding = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 20px;

  & > .circle {
    margin: 0 20px;
    font-size: 80px;
    width: 70px;
    color: ${colors.green};
    z-index: 1;
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

  & > p {
    padding: unset;
  }

  & > h5 {
    color: white;
  }
`;

export const SquareLeft = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);
`;

export const SquareRight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);
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
`;
