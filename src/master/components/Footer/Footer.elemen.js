import styled from 'styled-components';
import { colors, StyledContainer } from '../../constant/style';
import { Logo } from '../Navbar/Navbar.elemen';

export const FooterComp = styled.footer`
  background-color: ${({ colored }) => (colored ? colors.green : 'unset')};
`;

export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  & > div:nth-of-type(1) {
    & > p {
      color: ${({ colored }) => (colored ? colors.white : colors.black)};
    }
  }

  & > div {
    color: ${({ colored }) => (colored ? colors.white : colors.black)};
  }

  & > div:last-of-type > ul {
    display: flex;

    & > li:not(:last-of-type) {
      margin-right: 10px;
    }
    & > li {
      font-size: 36px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;

    & > div {
      margin-bottom: 20px;
      text-align: center;

      &:last-of-type > ul {
        justify-content: center;
      }
    }
  }
`;

export const FooterLogo = styled(Logo)`
  color: ${({ colored }) => (colored ? colors.green : colors.black)};
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${({ colored }) => (colored ? colors.white : colors.black)};
  border-top: 1px solid ${colors.lightGreenTransparent};
  text-align: center;
  padding: 10px 0 !important;
`;
