import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const BoxInput = styled.div`
  width: 90%;
  max-width: 900px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 10px 10px 40px #bebebe;
  display: flex;
  padding-left: 30px;

  & > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: inherit;
  }
`;

export const BoxTable = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 10px 10px 40px #bebebe;
  display: flex;
  padding-left: 30px;
`;

export const SpanImage = styled.span`
  border: 2px dashed gray;
  min-height: 210px;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  & > h6 {
    position: absolute;
    top: 45%;
    left: 27%;
    z-index: 0;
  }

  & > img {
    z-index: 2;
    object-fit: contain;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
