import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const RatingInput = ({ checked, setChecked }) => {
  const [level, setLevel] = useState('Sangat Baik');

  useEffect(() => {
    dynamicLevel();
  }, [checked]);

  const dynamicLevel = () => {
    if (checked === 'star5') setLevel('Sangat Baik');
    if (checked === 'star4') setLevel('Baik');
    if (checked === 'star3') setLevel('Cukup');
    if (checked === 'star2') setLevel('Buruk');
    if (checked === 'star1') setLevel('Sangat Buruk');
  };

  // ::: COMPONENT RADIO BUTTON :::
  const Radio = ({ value, checked, onChange }) => {
    return (
      <>
        <input
          type='radio'
          value={value}
          id={value}
          checked={checked}
          onChange={onChange}
        />

        <label htmlFor={value}>
          <FaStar size={24} />
        </label>
      </>
    );
  };

  return (
    <RatingContainer>
      <Rating>
        <Radio
          value='star5'
          checked={checked === 'star5'}
          onChange={(e) => setChecked(e.target.value)}
        />
        <Radio
          value='star4'
          checked={checked === 'star4'}
          onChange={(e) => setChecked(e.target.value)}
        />
        <Radio
          value='star3'
          checked={checked === 'star3'}
          onChange={(e) => setChecked(e.target.value)}
        />
        <Radio
          value='star2'
          checked={checked === 'star2'}
          onChange={(e) => setChecked(e.target.value)}
        />
        <Radio
          value='star1'
          checked={checked === 'star1'}
          onChange={(e) => setChecked(e.target.value)}
        />
      </Rating>

      <span>{level}</span>
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {
    color: ${colors.black};
    font-weight: 300;
    font-size: 14px;
  }
`;

const Rating = styled.div`
  transform: rotateY(180deg);
  margin-right: 10px;

  & > label {
    cursor: pointer;
    color: ${colors.lightGreen};

    &:hover,
    &:hover ~ label {
      color: ${colors.yellow};
    }
  }

  & > input {
    display: none;

    &:checked ~ label {
      color: ${colors.yellow};
    }
  }
`;

export default RatingInput;
