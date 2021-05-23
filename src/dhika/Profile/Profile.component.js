import styled from 'styled-components';
import { colors, StyledContainer } from '../../master/constant/style/index';

export const StyledProfile = styled.main`
  min-height: 100vh;
  background-color: ${colors.green};
  padding-top: 130px;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 83px;
  }
`;

export const ProfileContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;

  & > .valueChoose {
    width: 180px;
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    padding-top: 100px;

    & > .valueChoose {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextBox = styled.div`
  width: 175px;
  height: 25px;
  padding: 20px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  padding-left: ${({ biodata, address }) =>
    biodata || address ? '10px' : '12px'};

  background: ${({ biodata, address }) =>
    biodata || address ? colors.lightGreenTransparent : 'unset'};

  border-left: ${({ biodata, address }) =>
    biodata || address
      ? '4px solid white'
      : '2px solid rgba(255, 255, 255, 0.3)'};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-left: 4px solid white;
    padding-left: 10px;
  }
`;

export const Information = styled.div`
  width: 100%;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 20px;

    &:last-of-type {
      margin-top: 50px;
    }
  }

  @media (max-width: 760px) {
    max-width: 340px;
  }
`;

export const Data = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  & > li {
    &:nth-of-type(1) {
      width: 100%;
      max-width: 200px;
    }

    &:nth-of-type(2) {
      flex: 1;
      margin-left: 20px;
    }

    &:nth-of-type(3) {
      color: ${colors.yellow};
      cursor: pointer;
    }

    &:last-of-type {
      color: ${({ empty }) => (empty ? colors.yellow : 'auto')};
      cursor: ${({ empty }) => (empty ? 'pointer' : 'auto')};
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    & > li {
      &:nth-of-type(2) {
        margin-left: unset;
      }
    }
  }
`;

export const DataInput = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    margin-bottom: 50px;
  }

  & > p:nth-of-type(2) {
    color: ${colors.yellow};
    cursor: pointer;
  }
  & > p:nth-of-type(3) {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;

export const DataEdit = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  & > p {
    color: ${colors.yellow};
    cursor: pointer;
    margin-bottom: 50px;
  }
`;

export const RightArea = styled.div`
  width: 100%;

  & > button {
    margin-bottom: -10px !important;
  }
`;
