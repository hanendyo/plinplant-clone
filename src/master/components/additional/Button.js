import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import { useMediaQuery } from 'react-responsive';

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
  const isIpad = useMediaQuery({ maxWidth: 900 });

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
      isIpad={isIpad}
    >
      {text}
    </BtnComponent>
  );
};

const styledPadding = (primary, cta, card, summary, address, isIpad) => {
  if (primary && cta) {
    if (isIpad) return '15px 30px';
    return '15px 50px';
  }

  if (primary && summary) return '10px 50px';
  if (primary && address) return '10px 20px';
  if (primary) return '5px 20px';
  if (card) return '5px 10px';
  if (!primary && !cta && !card) return '3px 20px';
};

const styledFontSize = (primary, cta, card, shop, summary, isIpad) => {
  if ((primary && cta) || (primary && summary)) {
    if (isIpad) return '16px';

    return '20px';
  }
  if (primary && shop) return '12px';
  if (card) return '16px';
  if (primary || !primary) return 'inherit';
};

const BtnComponent = styled.button`
  font-family: inherit;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${({ bgColor }) =>
    bgColor === 'unset' ? colors.yellow : colors.white};

  padding: ${({ primary, cta, card, summary, address, isIpad }) =>
    styledPadding(primary, cta, card, summary, address, isIpad)};

  background-color: ${({ primary, card, bgColor }) =>
    primary || card ? bgColor : 'transparent'};

  border: ${({ primary, card, bgColor }) =>
    primary || card ? `none` : `2px solid ${bgColor}`};

  font-size: ${({ primary, cta, card, shop, summary, isIpad }) =>
    styledFontSize(primary, cta, card, shop, summary, isIpad)};

  font-weight: ${({ cta, summary, address }) =>
    cta || summary || address ? '500' : 'unset'};

  width: ${({ summary, shop }) => (summary || shop ? '100%' : 'unset')};

  border-radius: ${({ card, shop }) => (card || shop ? '4px' : '10px')};

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
