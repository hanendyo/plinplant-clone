import styled from "styled-components";
import { colors } from "../../../master/constant/style/index";

export const News = styled.div`
  display: flex;
  height: 150vh;
`;

export const HeaderComponent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1500px;
  background-color: ${colors.green};
  padding-top: 30px;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const Images = styled.div`
  background-color: red;
  width: 100%;
  max-width: 592px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  display: flex;
  line-height: 21px;
  font-size: 14px;
`;
export const Time = styled.div`
  display: flex;

  & > text {
    font-weight: 400;
    line-height: 21px;
    font-size: 14px;
  }
`;
export const Source = styled.div`
  display: flex;
  line-height: 21px;
  font-size: 14px;

  & > text {
    margin-right: 5px;
  }
`;

export const Pointer = styled.div`
  height: 5px;
  width: 5px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 50%;
`;

export const NewsContainer = styled.div`
  width: 30%;
  height: 150vh;
  padding: 30px 60px;
  background-color: ${colors.green};
  position: relative;
  padding-right: 100px;
`;

export const CardList = styled.div`
    position:sticky;
  width: 100%;
  max-width: 376px;
  height: 414px;
  background-color: ${colors.darkGreen};
  border-radius: 20px;
  overflow-y: scroll;
  text-align: center;
  
  }

  & > text {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    position: -webkit-sticky;
    position: sticky;
  
   & ::-webkit-scrollbar {
       display:none

   } 
`;

export const Card = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100px;
  background-color: ${colors.darkGreen};
`;
