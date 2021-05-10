import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';
import { ListCart } from '../Cart/Cart.elemen';

export const Container = styled(StyledContainer)`
  & > h2 {
    color: ${colors.white};
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > div {
      width: 100%;

      & > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
  }
`;

export const ShippingAddress = styled.section`
  background-color: ${colors.darkGreen};
  padding: 10px 20px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > h5 {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGreenTransparent};
    padding-bottom: 10px;
  }
`;

export const Address = styled.div`
  & > div {
    display: flex;
    align-items: center;
    margin: 10px 0 5px;

    & > h6 {
      color: ${colors.white};
    }

    & > span {
      display: block;
      font-size: 12px;
      padding: 3px 7px;
      border-radius: 5px;
      background-color: ${colors.lightGreenTransparent};
      margin-left: 10px;
    }
  }
`;

export const ListItem = styled(ListCart)`
  /* background-color: red; */
`;

export const Payment = styled.section`
  width: 100%;
  max-width: 250px;
  margin-left: 30px;

  & > h6 {
    color: ${colors.white};
  }

  & > button {
    background-color: ${colors.yellow};
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    margin-top: 5px;
    position: relative;
    cursor: pointer;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: 600;
    width: 100%;
    color: ${colors.white};

    &:focus {
      & > .dropdown {
        transform: rotate(-180deg) translateY(8px);
      }
    }

    & > .dropdown {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      transition: all 0.3s ease;
    }
  }

  & > p {
    font-size: 12px;
    background-color: #fa4d4d4d;
    padding: 10px !important;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &:first-of-type {
      margin: 10px 0 5px;
    }

    & > .warning {
      position: absolute;
      color: ${colors.yellowTransparent};
      top: -5px;
      left: -10px;
      font-size: 32px;
    }
  }
`;
