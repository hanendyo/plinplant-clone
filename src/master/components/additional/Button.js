import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Button = ({
  primary,
  summary,
  address,
  shop,
  invoice,
  cta,
  transaction,
  card,
  bgColor,
  text,
  onClick,
  type,
}) => {
  return (
    <BtnComponent
      primary={primary}
      cta={cta}
      address={address}
      summary={summary}
      invoice={invoice}
      transaction={transaction}
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

const styledPadding = (primary, cta, card, summary, address) => {
  if (primary && cta) return '15px 50px';
  if (primary && summary) return '10px 50px';
  if (primary && address) return '10px 20px';
  if (primary) return '5px 20px';
  if (card) return '5px 10px';
  if (!primary && !cta && !card) return '3px 20px';
};

const styledFontSize = (primary, cta, card, shop, summary, invoice) => {
  if ((primary && cta) || (primary && summary)) return '20px';
  if (primary && shop) return '12px';
  if (card) return '16px';
  if (primary || !primary) return 'inherit';
};

const BtnComponent = styled.button`
  font-family: inherit;
  outline: none;
  cursor: pointer;

  color: ${({ bgColor }) =>
    bgColor === 'unset' ? colors.yellow : colors.white};

  padding: ${({ primary, cta, card, summary, address }) =>
    styledPadding(primary, cta, card, summary, address)};

  background-color: ${({ primary, card, bgColor }) =>
    primary || card ? bgColor : 'transparent'};

  border: ${({ primary, card, bgColor }) =>
    primary || card ? `none` : `2px solid ${bgColor}`};

  font-size: ${({ primary, cta, card, shop, summary, invoice }) =>
    styledFontSize(primary, cta, card, shop, summary, invoice)};

  font-weight: ${({ cta, summary, address }) =>
    cta || summary || address ? '500' : 'unset'};

  width: ${({ summary, shop }) => (summary || shop ? '100%' : 'unset')};

  border-radius: ${({ card, shop }) => (card || shop ? '4px' : '10px')};

  &:first-of-type {
    margin-right: ${({ card }) => (card ? '10px' : 'unset')};
    margin-bottom: ${({ shop }) => (shop ? '5px' : 'unset')};
  }

  &:hover {
    /* transition: all 0.3s ease; */

    background-color: ${({ primary, card }) =>
      primary || card ? colors.lightGreen : 'transparent'};

    border: ${({ primary, card }) =>
      primary || card ? 'none' : `2px solid ${colors.lightGreen}`};

    color: ${({ primary, card }) =>
      primary || card ? colors.green : colors.lightGreen};
  }
`;

export default Button;
