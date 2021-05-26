import styled from 'styled-components';
import { colors, StyledContainer } from '../../../master/constant/style/index';

export const StyledHeader = styled.header`
  background-color: ${colors.green};
`;

export const Container = styled(StyledContainer)`
  padding: 130px 0 150px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 130px 0 50px;
  }
`;

export const Left = styled.div`
  margin-right: 50px;

  & > img {
    width: 750px;
    min-width: 400px;
    border-radius: 10px;
    position: sticky;
    top: 100px;
  }

  @media (max-width: 900px) {
    & > img {
      min-width: 300px;
    }
  }

  @media (max-width: 760px) {
    margin-right: unset;
    margin-bottom: 10px;

    & > img {
      position: unset;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 500px;

  & > h1,
  h5 {
    color: ${colors.white};
  }

  & > h1 {
    margin-bottom: 30px;
  }

  & > p {
    padding: unset;
    margin-bottom: 20px;
  }

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

export const BoxGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: -120px;
  right: 0;

  @media (max-width: 900px) {
    left: 0;
  }

  @media (max-width: 760px) {
    position: unset;
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  background-color: ${colors.yellow};
  color: ${colors.green};
  width: 240px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  &:nth-of-type(2) {
    margin: 0 24px;
  }

  & > div {
    margin-bottom: 20px;

    & > .icon {
      font-size: 80px;
    }
  }

  & > p {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    & > div {
      & > .icon {
        font-size: 60px;
      }
    }

    & > p {
      font-size: 20px;
    }
  }

  @media (max-width: 760px) {
    margin-bottom: 10px;
    width: 100%;

    &:nth-of-type(2) {
      margin: unset;
      margin-bottom: 10px;
    }

    & > div {
      & > .icon {
        font-size: 40px;
      }
    }

    & > p {
      font-size: 16px;
    }
  }
`;
