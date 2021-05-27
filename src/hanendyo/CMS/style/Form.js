import styled from 'styled-components';
import { colors } from "../../../master/constant/style";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const BoxForm = styled.div`
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
  width: 90%;
  margin-top: 20px;
  /* padding: 10px; */
  border-radius: 5px;
  background: #fff;
  box-shadow: 10px 10px 40px #bebebe;
  padding:0 5px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BoxTablePhone = styled.div`
  display: none;
  @media screen and (max-width: 900px){
    display:block;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 10px 10px 40px #bebebe;
    padding-left: 10px;
  }
`;

export const TableListPhone = styled.div`
  width: 100%;
  background: brown;
  display: flex;
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
  margin: 15px 0;

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

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid black;
  position: sticky;
  top: 80px;
  background: white;
  z-index:2;

  & > li {
    color:black;
    width: 100px;
    display:flex;
    justify-content: center;
    
  }
  & > .content {
      width: 200px;

      @media screen and (max-width: 900px){
        width: 100px;
      }
  }
  @media screen and (max-width: 900px){
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
    color: black;
    padding: 10px;

    & > li {
      justify-content: space-between;
      width: 100%;
      color:black;
    }
  }
`
export const ListData = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  padding:10px 0;
  border-radius: 2px;
  transition: all 0.1s ease-in;
  
  &:hover{
    background: ${colors.lightGreenTransparent};
  }

  & > li {
    color:black;
    width: 100px;
    text-align: center;
  }

  & > .content {
      width: 200px;
      text-align: left;
  }

  & > .ActionButton {
    background: ${colors.green}
  }
  
  
`
export const ContentBox = styled.div`
  width: 200px;
  height: 110px;
  overflow-y: scroll;
  padding-left: 5px;
  margin-bottom: 5px;
  
  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
    height: 100px;
  }
`

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 10px;
`