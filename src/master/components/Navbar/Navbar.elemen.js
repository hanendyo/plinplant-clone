import styled from 'styled-components';
import { StyledContainer, colors } from '../../constant/style';

export const Nav = styled.nav`
  background-color: ${colors.green};
`;

export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: relative;

  & > .logo-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* background-color: burlywood; */
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-family: 'Elsie Swash Caps', sans-serif;
  color: ${colors.white};
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

        &:focus {
          & ~ div {
            visibility: visible;
          }
        }

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
        background-color: #f8faf8cc;
        padding: 20px;
        border-radius: 10px;
        right: 0;
        top: 80px;
        backdrop-filter: blur(5px);
        cursor: auto;
        z-index: 999;
        visibility: hidden;

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

            &:not(:last-of-type) {
              margin-bottom: 10px;
              color: ${colors.black};
            }
          }
        }
      }
    }

    & > .cart {
      color: ${colors.lightGreenTransparent};
      font-size: inherit;
      cursor: pointer;

      &:hover {
        color: ${colors.lightGreen};
      }
    }
  }

  /* & > button {
    z-index: 999
  } */
`;

// Navbar.js style
export const Home = styled.p`
  display: flex;
  align-items: center;

  & > .icon {
    margin-right: 10px;
    font-size: 12px;
  }
`;
