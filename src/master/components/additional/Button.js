import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Button = ({ primary, card, bgColor, text, onClick, type }) => {
  return (
    <BtnComponent
      primary={primary}
      card={card}
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
  padding: ${({ card }) => (card ? '5px 10px' : '3px 20px')};
  background-color: ${({ primary, card, bgColor }) =>
    primary || card ? bgColor : 'transparent'};

  border: ${({ primary, card, bgColor }) =>
    primary || card ? `none` : `2px solid ${bgColor}`};

  font-family: inherit;
  font-size: ${({ card }) => (card ? '16px' : 'inherit')};
  border-radius: ${({ card }) => (card ? '4px' : '10px')};
  color: white;
  outline: none;
  cursor: pointer;

  &:first-of-type {
    margin-right: ${({ card }) => (card ? '10px' : 'unset')};
  }

  &:hover {
    background-color: ${({ primary, card }) =>
      primary || card ? colors.lightGreen : 'transparent'};

    border: ${({ primary, card }) =>
      primary || card ? 'none' : `2px solid ${colors.lightGreen}`};

    transition: all 0.3s ease;
    color: ${({ primary, card }) =>
      primary || card ? colors.green : colors.lightGreen};
  }
`;

export default Button;
