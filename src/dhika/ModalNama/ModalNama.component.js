import styled from "styled-components";
import { colors } from "../../master/constant/style/index";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #22222280;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  display: ${({ modal }) => (modal ? "auto" : "none")};
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 30px;
  width: 100%;
  max-width: 640px;
  height: fit-content;
  background-color: ${colors.white};
  border-radius: 10px;

  & > h4 {
    text-align: center;
  }

  & > p {
    color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > p:nth-of-type(1) {
    margin-top: 10px;
  }
  & > p:nth-of-type(2) {
    margin-bottom: 20px;
  }

  @media (max-width: 760px) {
    margin: 10px;
    padding: 20px 10px 10px;
  }
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
  margin-bottom: 10px;

  &:nth-of-type(1) {
    & > div:first-of-type {
      margin-right: 20px;
    }
  }

  &:nth-of-type(2) {
    & > div:first-of-type {
      margin-right: 20px;
    }

    & > div:last-of-type {
      width: 250px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    margin-bottom: unset;

    &:nth-of-type(2) {
      & > div:last-of-type {
        width: 100%;
      }
    }
  }
`;

export const InsertData = styled.div`
  width: 100%;

  & > label {
    color: ${colors.black};
    font-weight: 600;
    display: block;
  }

  & > .form {
    width: 100%;
  }

  @media (max-width: 760px) {
    margin-bottom: 10px;

    & > .form {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  & > button {
    margin-left: 5px;
  }
`;
