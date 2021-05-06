import styled from "styled-components";
import { colors, StyledContainer } from "../../../master/constant/style/index";

export const Main = styled.main`
  background-color: ${colors.green};
`;

export const News = styled(StyledContainer)`
  position: relative;
  display: flex;
  min-height: 100vh;
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
  padding-bottom: 50px;
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
  height: 50vh;
  padding: 30px 60px;
  background-color: ${colors.green};
  padding-right: 100px;
`;

export const CardList = styled.div`
  position: sticky;
  min-width: 300px;
  width: 376px;
  height: 414px;
  background-color: ${colors.darkGreen};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow-y: scroll;
  text-align: center;

  & > text {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    position: -webkit-sticky;
    position: sticky;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 92%;
  max-width: 376px;
  height: 100px;
  background-color: ${colors.darkGreen};
  position: relative;
  margin-left: 15px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CardImage = styled.div`
  object-fit: contain;
  width: 35%;
`;
export const CardText = styled.div`
  object-fit: contain;
  background-color: ${colors.green};
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 10px;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${colors.lightGreen};
  }
`;

export const TextArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.darkGreen};
  width: 376px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
