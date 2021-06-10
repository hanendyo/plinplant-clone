import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';
import { ListCart } from '../Cart/Cart.elemen';

export const CheckoutSection = styled.main`
  background-color: ${colors.green};
  padding-top: 130px;
  min-height: 100vh;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }
`;

export const Container = styled(StyledContainer)`
  position: relative;

  & > h2 {
    color: ${colors.white};
    margin-bottom: 30px;
  }

  & > div:not(:last-of-type) {
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

  @media (max-width: 1200px) {
    & > div {
      flex-direction: column;
    }
  }

  @media (max-width: 760px) {
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
          flex-wrap: wrap;
        }
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

  @media (max-width: 760px) {
    & > div {
      flex-direction: column;
      align-items: flex-start;
    }
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

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

export const ListItem = styled(ListCart)`
  /* background-color: red; */
`;

export const Payment = styled.section`
  width: 100%;
  max-width: 250px;
  margin-left: 30px;
  position: relative;

  & > h6 {
    color: ${colors.white};
  }

  & > button {
    background-color: ${colors.yellow};
    text-align: center;
    padding: 15px;
    padding-left: 20px;
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
    z-index: 1;

    /* &:focus {
      & > .dropdown {
        transform: ;
      }

      & ~ ul {
        visibility: visible;
        opacity: 1;
        top: 90px;
      }
    } */

    & > .dropdown {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: ${({ payment }) =>
        payment ? 'rotate(-180deg) translateY(8px)' : 'translateY(-50%)'};
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

  & > ul {
    position: absolute;
    top: ${({ payment }) => (payment ? '90px' : '70px')};
    left: 0;
    right: 0;
    background-color: ${colors.lightGreen};
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    visibility: ${({ payment }) => (payment ? 'visible' : 'hidden')};
    opacity: ${({ payment }) => (payment ? '1' : '0')};

    & > li {
      padding: 10px 0;
      cursor: pointer;

      &:hover {
        background-color: ${colors.yellow};
      }

      &:not(:last-of-type) {
        /* margin-bottom: 10px; */
      }
    }
  }

  @media (max-width: 760px) {
    margin-left: unset;
    margin: 20px auto 0;
  }
`;
