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
  position: relative;

  & > li {
    cursor: pointer;
  }

  & > li:not(:nth-of-type(3)) {
    margin-right: 20px;
  }

  & > li:nth-of-type(3) {
    & > button:nth-of-type(1) {
      margin-right: 10px;
    }
  }

  & > li > .cart {
    color: ${colors.lightGreenTransparent};
    font-size: inherit;
    cursor: pointer;

    &:hover {
      color: ${colors.lightGreen};
    }
  }

  &::after {
    content: '';
    height: 30px;
    width: 1px;
    background-color: ${colors.yellowTransparent};
    position: absolute;
    left: 27px;
  }
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
