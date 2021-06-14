import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const InvoiceSection = styled.main`
  background-color: ${colors.green};
  padding-top: 130px;
  min-height: 100vh;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }
`;

export const Container = styled(StyledContainer)`
  & > h2 {
    color: ${colors.white};
    margin-bottom: 10px;
  }
`;

export const HeaderInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5px;

  & > div {
    & > p {
      font-size: 14px;
    }

    & > h6 {
      color: ${colors.white};
      font-size: 18px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: unset;

    & > div {
      margin-bottom: 10px;
    }
  }
`;

export const ShoppingDetail = styled.section`
  background-color: ${colors.darkGreen};
  padding: 20px 30px;
  border-radius: 20px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  position: relative;

  & > div:nth-of-type(1) {
    width: 100%;
    /* background-color: burlywood; */

    & > h5 {
      color: ${colors.white};
      margin-bottom: 10px;
    }
  }

  & > div:nth-of-type(2) {
    border-left: 1px solid ${colors.lightGreenTransparent};
    padding-left: 30px;
    margin-left: 30px;
    width: 100%;
    max-width: 620px;
  }

  & > div:nth-of-type(3) {
    position: absolute;
    top: 20px;
    right: 30px;

    display: ${({ status }) =>
      status === 'selesai' || status === 'verif' || status === 'proses'
        ? 'none'
        : 'block'};
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    & > div:nth-of-type(1) {
      margin-top: 20px;
    }

    & > div:nth-of-type(2) {
      padding-left: unset;
      margin-left: unset;
      border-left: unset;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      border-top: 1px solid ${colors.lightGreenTransparent};
      padding-top: 20px;
    }
  }

  @media (max-width: 900px) {
    & > div:nth-of-type(2) {
      flex-direction: column;
    }
  }

  @media (max-width: 760px) {
    padding: 10px;
    border-radius: 10px;

    & > div:nth-of-type(2) {
      border-top: unset;
      margin-top: unset;
      padding-top: unset;
    }

    & > div:nth-of-type(3) {
      top: 10px;
      right: 10px;
    }
  }
`;

export const Shipping = styled.div`
  border-bottom: 1px solid ${colors.lightGreenTransparent};
  margin-bottom: 20px;
  padding-bottom: 20px;

  & > h5 {
    color: ${colors.white};
    margin-bottom: 10px;
  }

  & > p {
    margin-left: 10px;
    font-size: 14px;
  }

  @media (max-width: 1200px) {
    border-bottom: unset;
  }

  @media (max-width: 760px) {
    border-bottom: 1px solid ${colors.lightGreenTransparent};
    border-top: 1px solid ${colors.lightGreenTransparent};
    margin-top: 30px;
    padding-top: 20px;
  }
`;

export const Payment = styled.div`
  & > h5 {
    color: ${colors.white};
    margin-bottom: 10px;
  }

  & > div {
    margin-left: 10px;
    display: flex;

    &:last-of-type {
      margin-top: 10px;

      & > h6 {
        background-color: ${colors.lightGreenTransparent};
        padding: 10px 50px 10px 10px;
        border-radius: 10px;
      }
    }

    & > h6 {
      color: ${colors.white};
      margin-left: 20px;
      font-size: 14px;
      padding-left: 10px;
      position: relative;
      overflow: hidden;

      & > .warning {
        position: absolute;
        top: -5px;
        right: -10px;
        color: ${colors.lightGreenTransparent};
        font-size: 36px;
      }
    }

    & > p {
      font-size: 14px;
      flex: 1;
      width: 100%;
      max-width: 280px;

      & > span {
        font-size: 12px;
        color: ${colors.yellow};
      }
    }
  }

  @media (max-width: 900px) {
    & > div {
      & > h6 {
        margin-left: 24%;
      }
    }
  }

  @media (max-width: 760px) {
    & > div {
      flex-direction: column;
      margin-bottom: 10px;
      margin-left: unset;
      padding: 0 10px;

      & > p > span {
        display: block;
        margin-bottom: 5px;
      }

      & > h6 {
        margin-left: unset;
        padding-left: unset;
      }
    }
  }
`;
