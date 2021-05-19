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
  max-width: 650px;
  height: 500px;
  background-color: ${colors.white};
  border-radius: 10px;

  & > h4 {
    color: ${colors.black};
    text-align: center;
    margin: 20px 0;
  }

  & > .times {
    color: ${colors.black};
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
`;
