import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 100px;
`;

export const BoxInput = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 10px 10px 40px #bebebe;
  display: flex;

  & > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: inherit;
  }
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
    left: 17%;
    z-index: 0;
  }

  & > img {
    z-index: 2;
    object-fit: contain;
  }
`;
