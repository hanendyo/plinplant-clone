import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const ScrollSign = ({ center }) => {
  return (
    <Sign center={center}>
      <FaArrowDown className='down' /> Scroll down for more
    </Sign>
  );
};

const Sign = styled.p`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'unset')};
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  color: ${colors.lightGreen};
  transform: translateY(-7px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  & > .down {
    margin-right: 10px;
  }
`;

export default ScrollSign;
