import styled from 'styled-components';
import { StyledContainer, colors } from '../../constant/style';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #254c50f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 0.5s ease;
  backdrop-filter: blur(5px);

  box-shadow: ${({ shadow }) =>
    shadow ? '0px 7px 10px rgba(0, 0, 0, 0.07)' : 'unset'};
`;

export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;

  height: ${({ shadow }) => (shadow ? '80px' : '100px')};

  & > .logo-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 760px) {
    & > .logo-center {
      left: 25%;
    }
  }

  /* background-color: burlywood; */
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-family: 'Elsie Swash Caps', sans-serif;
  color: ${colors.white};

  @media (max-width: 760px) {
    font-size: 28px;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;

  & > li {
    cursor: pointer;

    &:nth-of-type(2) {
      margin: 0 20px;
      border-left: 1px solid ${colors.yellowTransparent};
      padding-left: 20px;
    }

    &:nth-of-type(3) {
      & > button {
        color: ${colors.white};
        font-size: inherit;
        font-family: inherit;
        outline: none;

        display: ${({ login }) => (login ? 'flex' : 'unset')};
        align-items: ${({ login }) => (login ? 'center' : 'unset')};
        border: ${({ login }) => (login ? 'none' : 'auto')};
        background-color: ${({ login }) => (login ? 'unset' : 'auto')};
        cursor: ${({ login }) => (login ? 'pointer' : 'inherit')};

        /* &:focus {
          & ~ div {
            visibility: visible;
          }
        } */

        & > img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      & > button:nth-of-type(1) {
        margin-right: 10px;
      }

      & > div {
        position: absolute;
        width: fit-content;
        background-color: ${colors.white};
        padding: 20px;
        border-radius: 10px;
        right: 0;
        bottom: -230px;
        cursor: auto;
        z-index: 999;
        /* backdrop-filter: blur(10px); */

        visibility: ${({ profile }) => (profile ? 'visible' : 'hidden')};

        & > div {
          display: flex;
          align-items: center;
          border-bottom: 0.5px solid #2222224d;
          margin-bottom: 10px;
          padding-bottom: 20px;

          & > img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }

          & > div {
            & > span {
              display: block;
              font-size: 12px;
              color: #22222280;
            }
          }
        }

        & > ul {
          & > li {
            color: #fa4d4d;
            font-weight: 500;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;

            &:not(:last-of-type) {
              color: ${colors.black};
            }

            &:hover {
              background-color: ${colors.lightGreenTransparent};
            }
          }
        }

        @media (max-width: 760px) {
          right: 5px;
        }
      }
    }

    & > a > .cart {
      color: ${colors.lightGreenTransparent};
      font-size: inherit;
      cursor: pointer;

      &:hover {
        color: ${colors.lightGreen};
      }
    }
  }

  @media (max-width: 900px) {
    & > li:last-of-type > button {
      & > p {
        display: none;
      }

      & > img {
        margin-right: unset;
      }
    }
  }

  /* & > button {
    z-index: 999
  } */
`;

// Navbar.js style
export const Home = styled(Link)`
  display: flex;
  align-items: center;

  & > .icon {
    margin-right: 10px;
    font-size: 12px;
  }

  @media (max-width: 760px) {
    & > p {
      display: none;
    }
  }
`;
