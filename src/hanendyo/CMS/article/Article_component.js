import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 100px;
`;

export const BoxInput = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 10px 10px 40px #bebebe;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  & > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100px;
  }
`;
