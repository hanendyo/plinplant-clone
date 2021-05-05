import styled from "styled-components";
import { colors, StyledContainer } from "../../../master/constant/style/index";
import image1 from "../../images/basil.jpg";

export const Section = styled(StyledContainer)`
  min-height: 670px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.green};
`;

export const Container = styled(StyledContainer)`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  background-color: red;
  width: 100%;
  max-width: 530px;
  height: 370px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Right = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 440px;

  & > h1 {
    font-weight: bold;
    color: ${colors.white};
  }

  & > p {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }

  & > text {
    font-weight: lighter;
  }
`;

export const BoxGroup = styled.div`
  display: flex;
  width: 100%;
  margin-right: 200px;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 10px;
    height: 500px;
  }
`;

export const Box = styled.div`
  background-color: ${colors.yellow};
  color: ${colors.green};
  margin-top: -120px;
  margin-right: 40px;
  width: 300px;
  max-width: 240px;
  height: 240px;
  padding: 26px 8px;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > p {
    font-size: 24px;
    line-height: 36px;
  }

  & > text {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
