import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const AlertSign = ({ text, notif }) => {
  return (
    <Alert notif={notif}>
      <p>{text}</p>
    </Alert>
  );
};

const Alert = styled.div`
  position: absolute;
  top: ${({ notif }) => (notif ? 0 : '-4rem')};
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 700px;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${colors.lightGreen};
  color: ${colors.green};
  transition: all 0.3s ease;

  visibility: ${({ notif }) => (notif ? 'visible' : 'hidden')};
  opacity: ${({ notif }) => (notif ? 1 : 0)};
`;

export default AlertSign;
