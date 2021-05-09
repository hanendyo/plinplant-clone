import styled from "styled-components";
import { colors } from "../../../master/constant/style/index";
export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  min-height: 485px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

export const Button = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const LineData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InsertData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
