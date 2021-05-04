import styled from "styled-components";
import { colors } from "../../../master/constant/style/index";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: 25px 0;
    color: ${colors.white};
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 40vh;
  background: ${colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 70%;
  max-width: 1032px;
  height: 250px;
  background: red;
  display: flex;
  align-items: center;
  padding: 25px;
  background-color: ${colors.darkGreen};
`;
