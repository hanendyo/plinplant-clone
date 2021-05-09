import styled from "styled-components";
import { colors } from "../../../master/constant/style/index";
export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 680px;
  min-height: 600px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;

  & > h4 {
    color: ${colors.black};
    text-align: center;
    margin: 20px;
    margin-bottom: 20px;
  }
  & > .times {
    color: ${colors.black};
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const BoxAlamat = styled.div`
  width: 90%;
  min-height: 100%;
  border: 2px solid ${colors.black};
  border-radius: 15px;
  margin: 5px 25px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s;

  &:hover {
    border: 2px solid ${colors.lightGreen};
  }
`;

export const BoxLeft = styled.div`
  & > p {
    color: ${colors.black};
    font-size: 12px;
  }

  & > a {
    color: ${colors.green};
    font-weight: bold;
    font-size: 12px;
  }
`;
export const FirstLine = styled.div`
  display: flex;

  & > p {
    color: ${colors.black};
    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;
  }

  & > span {
    color: ${colors.black};
    font-size: 12px;
    padding: 0 15px;
    background-color: ${colors.lightGreen};
    border-radius: 10px;
  }
`;

export const ButtonPilih = styled.div`
  margin: 10px;
`;
