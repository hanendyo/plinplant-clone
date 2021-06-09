import styled from 'styled-components';
import { StyledContainer } from '../../../master/constant/style';
import { colors } from '../../../master/constant/style';

export const Container = styled(StyledContainer)`
  height: 100vh;

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 5rem);

    & > img {
      max-width: 600px;
    }

    @media (max-width: 1200px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 900px) {
      & > img {
        max-width: 400px;
      }
    }

    @media (max-width: 760px) {
      & > img {
        display: none;
      }
    }
  }
`;

export const FormLogin = styled.div`
  padding: 20px 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  margin-right: 7rem;
  text-align: center;
  background-color: white;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);

  & > h1 {
    font-family: 'Elsie Swash Caps', sans-serif;
    color: ${colors.green};
  }

  & > p {
    color: ${colors.darkGreen};

    &:nth-of-type(1) {
      margin: 0 0 10px;
    }

    &:nth-of-type(2) {
      margin: 20px 0 0;

      & > a {
        color: ${colors.yellow};
        cursor: pointer;
      }
    }
  }

  & > form {
    display: flex;
    flex-direction: column;

    & > .form-field {
      margin-bottom: 10px;
    }

    & > .btn-login {
      background-color: ${colors.lightGreen};
    }
  }

  @media (max-width: 1200px) {
    margin-right: unset;
    max-width: 600px;
  }
`;
