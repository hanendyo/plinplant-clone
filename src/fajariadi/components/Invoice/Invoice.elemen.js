import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

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
`;

export const ShoppingDetail = styled.section`
  background-color: ${colors.darkGreen};
  padding: 20px 30px;
  border-radius: 20px;
  height: 400px;
  display: flex;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    width: 100%;

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
`;
