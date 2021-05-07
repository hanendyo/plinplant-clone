import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Button = ({ primary, shop, cta, card, bgColor, text, onClick, type }) => {
  return (
    <BtnComponent
      primary={primary}
      cta={cta}
      shop={shop}
      card={card}
      bgColor={bgColor}
      onClick={onClick}
      type={type}
    >
      {text}
    </BtnComponent>
  );
};

const styledPadding = (primary, cta, card) => {
  if (primary && cta) return '15px 50px';
  if (primary) return '5px 20px';
  if (card) return '5px 10px';
  if (!primary && !cta && !card) return '3px 20px';
};

const styledFontSize = (primary, cta, card, shop) => {
  if (primary && cta) return '20px';
  if (primary && shop) return '12px';
  if (card) return '16px';
  if (primary || !primary) return 'inherit';
};

const BtnComponent = styled.button`
  padding: ${({ primary, cta, card }) => styledPadding(primary, cta, card)};

  background-color: ${({ primary, card, bgColor }) =>
    primary || card ? bgColor : 'transparent'};

  border: ${({ primary, card, bgColor }) =>
    primary || card ? `none` : `2px solid ${bgColor}`};

  font-family: inherit;
  font-size: ${({ primary, cta, card, shop }) =>
    styledFontSize(primary, cta, card, shop)};
  font-weight: ${({ cta }) => (cta ? '500' : 'unset')};

  border-radius: ${({ card, shop }) => (card || shop ? '4px' : '10px')};
  color: white;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-of-type {
    margin-right: ${({ card }) => (card ? '10px' : 'unset')};
    margin-bottom: ${({ shop }) => (shop ? '5px' : 'unset')};
  }

  &:hover {
    background-color: ${({ primary, card }) =>
      primary || card ? colors.lightGreen : 'transparent'};

    border: ${({ primary, card }) =>
      primary || card ? 'none' : `2px solid ${colors.lightGreen}`};

    color: ${({ primary, card }) =>
      primary || card ? colors.green : colors.lightGreen};
  }
`;

export default Button;
