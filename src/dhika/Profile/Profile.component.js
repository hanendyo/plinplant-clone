import styled from 'styled-components';
import { colors, StyledContainer } from '../../master/constant/style/index';

export const StyledProfile = styled.main`
  min-height: 100vh;
  background-color: ${colors.green};
  padding-top: 130px;
`;

export const ProfileContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;

  & > .valueChoose {
    width: 180px;
    margin-right: 20px;
    margin-top: 65px;
  }
`;

export const TextBox = styled.div`
  width: 175px;
  height: 25px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-left: 3px solid white;
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
