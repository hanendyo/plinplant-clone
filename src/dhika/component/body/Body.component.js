import styled from "styled-components";
import { colors, StyledContainer } from "../../../master/constant/style/index";

export const Header = styled.div`
  text-align: center;
  width: 100%;
  margin: 100px 0;

  & > p {
    color: black;
    margin: 25px 0;
    padding: 0 100px;
  }
`;

export const Breeding = styled.div`
  margin: 0 auto;
  width: 90%;
  min-height: 40vh;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  overflow: hidden;
`;

export const BoxContainer = styled.div`
  display: flex;
`;

export const Textbox = styled.div`
  background-color: ${colors.green};
  color: ${colors.white};
  width: 100%;
  max-width: 461px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border-radius: 10px;
  z-index: 11;
  & > p {
    padding: 0 30px;
  }
`;

export const SquareLeft = styled.div`
  margin: 0 -50px;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);
`;

export const SquareRight = styled.div`
  margin-right: -50px;
  width: 50px;
  height: 50px;
  background-color: ${colors.green};
  transform: rotate(45deg);
`;
export const CircleContainer = styled.div`
  position: absolute;
  height: 60vh;
  width: 60px;
  margin: 0 -20px;
  left: 50%;
  z-index: 9;
  display: flex;
  /* background: green; */
`;

export const Circle = styled.div`
  color: ${colors.green};
  z-index: 10;
`;

export const LongSquare = styled.div`
  width: 3px;
  height: 40vh;
  margin-left: -32px;
  margin-top: 3px;
  background: ${colors.yellow};
`;

export const ImageCointainer = styled.div`
  position: relative;
  text-align: center;
  color: ${colors.black};
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 100px 0 100px;
  & > p {
    position: absolute;
    text-align: center;
    top: 260px;
    left: 20px;
    font-weight: bold;
    color: ${colors.white};
  }

  & > img {
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 300px;
  }
`;

export const LinearGradient = styled.div`
  width: 300px;
  height: 75px;
  background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, #222222 100%);
  position: absolute;
  left: 0px;
  top: 228px;
`;
