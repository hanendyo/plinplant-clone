import styled from 'styled-components';
import { colors } from '../../../master/constant/style/index';

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
  display: ${({ modal }) => (modal ? 'auto' : 'none')};
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
    margin-bottom: 20px;
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
`;

export const InsertData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  & > button {
    margin-left: 5px;
  }
`;
