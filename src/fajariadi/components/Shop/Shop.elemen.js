import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style';

export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const RelatedProduct = styled.section`
  background-color: ${({ isIpad }) => (isIpad ? 'unset' : colors.darkGreen)};
  width: 100%;
  max-width: 255px;
  padding: 10px;
  border-radius: 20px;
  height: 550px;
  /* margin-right: 30px; */

  & > h5 {
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.white};
  }

  @media (max-width: 1200px) {
    order: 2;
  }

  @media (max-width: 900px) {
    order: 3;
    margin-top: 30px;
    max-width: 100%;
    padding: 0 30px;
    height: fit-content;
    margin-bottom: 50px;
  }

  @media (max-width: 900px) {
    padding: 0 50px;
  }

  /* @media (max-width: 760px) {
    max-width: 255px;
    padding: 10px;
    margin: 30px auto 50px;
  } */
`;

export const Product = styled.section`
  margin: 0 20px 0 30px;

  & > div:nth-of-type(1) {
    background-color: ${colors.darkGreen};
    width: 100%;
    max-width: 500px;
    padding: 10px 10px 50px;
    border-radius: 20px;
    height: fit-content;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    max-width: 500px;

    & > div {
      text-align: center;

      &:not(:last-of-type) {
        margin-right: 10px;
      }

      & > h6 {
        color: ${colors.white};
      }
    }
  }

  @media (max-width: 1200px) {
    order: 1;
  }

  @media (max-width: 900px) {
    margin: unset;
    width: 100%;

    & > div:nth-of-type(1) {
      margin: 0 auto;
    }

    & > div:nth-of-type(2) {
      margin: 30px auto 0;
    }
  }

  @media (max-width: 760px) {
    & > div:nth-of-type(2) {
      flex-wrap: wrap;
      justify-content: center;

      & > div {
        margin: 10px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  box-shadow: ${({ active, highlight }) =>
    active === highlight ? '0px 7px 0px rgba(0, 0, 0, 0.2)' : 'unset'};

  transform: ${({ active, highlight }) =>
    active === highlight ? 'translateY(-7px)' : 'unset'};

  &:hover {
    box-shadow: 0px 7px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
  }

  @media (max-width: 760px) {
    width: 150px;
    height: 150px;
  }
`;

export const ProductHighlight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -30px;

  /* KOLOM KIRI */
  & > div:nth-of-type(1) {
    /* ....... */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    position: relative;

    & > img {
      width: 170px;
      height: 170px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  /* KOLOM KANAN */
  & > div:nth-of-type(2) {
    width: 100%;
    max-width: 300px;

    & > h4 {
      color: ${colors.white};
    }

    & > div {
      display: flex;
      align-items: center;
      margin: 5px 0 15px;

      & > span {
        display: block;
      }

      & > span:nth-of-type(1) {
        display: flex;
        align-items: center;

        & > .star {
          color: ${colors.yellow};
          margin-right: 5px;
        }
      }

      & > span:nth-of-type(2) {
        margin-left: 10px;
        background-color: ${colors.lightGreenTransparent};
        padding: 3px 5px;
        border-radius: 10px;
      }
    }

    & > h5 {
      color: ${colors.white};
      border-bottom: 1px solid ${colors.lightGreenTransparent};
      padding-bottom: 10px;
    }

    & > p {
      margin: 10px 0 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    margin-left: unset;

    & > div:nth-of-type(1) {
      margin-right: unset;

      & > img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
      }
    }

    & > div:nth-of-type(2) {
      max-width: 100%;
    }
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 1000px;
  padding: 10px 20px;
  font-family: inherit;
  font-weight: 500;
  background-color: ${colors.yellow};
  color: ${colors.white};
  cursor: pointer;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);

  & > .cart {
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const Info = styled.div`
  background-color: ${colors.lightGreenTransparent};
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 7px 10px 7px 25px;
  border-radius: 999px;
  margin-left: auto;
  margin-bottom: 20px;

  & > .info-icon {
    margin-left: 15px;
    color: ${colors.lightGreen};
  }
`;

export const ButtonInfo = styled(ButtonCart)`
  justify-content: space-between;
  background-color: unset;
  padding: unset;
  font-size: inherit;
  box-shadow: unset;
`;

export const ReviewContainer = styled.section`
  background-color: ${colors.darkGreen};
  width: 100%;
  max-width: 330px;
  padding: 10px 15px 15px 5px;
  border-radius: 20px;
  height: 550px;
  /* margin-left: 20px; */

  & > h5 {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 10px;
  }

  & > p {
    /* margin-top: 7rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 1200px) {
    order: 3;
    max-width: 100%;
    margin-top: 30px;
  }

  @media (max-width: 900px) {
    order: 2;
  }
`;
