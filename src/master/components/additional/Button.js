import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Button = ({ primary, bgColor, text, onClick, type }) => {
  return (
    <BtnComponent
      primary={primary}
      bgColor={bgColor}
      onClick={onClick}
      type={type}
    >
      {text}
    </BtnComponent>
  );
};

const BtnComponent = styled.button`
  padding: ${({ primary }) => (primary ? '5px 20px' : '3px 20px')};
  background-color: ${({ primary, bgColor }) =>
    primary ? bgColor : 'transparent'};
  border: ${({ primary, bgColor }) =>
    primary ? `none` : `2px solid ${bgColor}`};
  font-family: inherit;
  font-size: inherit;
  border-radius: 10px;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? colors.lightGreen : 'transparent'};
    border: ${({ primary }) =>
      primary ? 'none' : `2px solid ${colors.lightGreen}`};
    transition: all 0.3s ease;
    color: ${({ primary }) => (primary ? colors.green : colors.lightGreen)};
  }
`;

export default Button;
