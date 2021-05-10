import styled from "styled-components";
import { colors, StyledContainer } from "../../master/constant/style/index";

export const StyledProfile = styled.header`
  background-color: ${colors.green};
`;
export const ProfileContainer = styled(StyledContainer)`
  padding: 30px 0 150px;
  position: relative;
  display: flex;
  justify-content: space-between;

  & > .valueChoose {
    margin: 100px 0;
  }
`;

export const TextBox = styled.div`
  width: 175px;
  height: 25px;
  padding: 20px 10px;
  margin: 0 20px;
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
export const ButtonProfile = styled.button`
  width: 175px;
  height: 25px;
  padding: 20px 10px;

  display: flex;
  align-items: center;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-left: 3px solid white;
  }
`;

export const UploadBox = styled.div`
  width: 100%;
  max-width: 340px;
  min-height: 450px;
  border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    color: ${colors.black};
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
  height: 60%;
  margin: 20px 0;
  background-color: ${colors.lightGreen};
`;

export const Information = styled.div`
  margin-left: 30px;
  width: 100%;
  background: ${colors.green};

  & > h4 {
    color: ${colors.white};
    margin: 0;
  }
`;

export const Data = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px 0;
  width: 100%;
  height: 200px;
`;

export const ListData = styled.div`
  width: 100%;
  max-width: 170px;
  & > ul {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > li {
      margin-bottom: 50px;
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
  z-index: 0;
`;

export const DataAlamat = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 420px;
  overflow-y: scroll;
  margin-top: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 5px 0px;
  position: relative;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const BoxLeft = styled.div`
  height: 150px;
  padding: 30px 0;
  & > p {
    color: ${colors.white};
    font-size: 12px;
  }

  & > a {
    color: ${colors.white};
    font-weight: bold;
    font-size: 12px;
  }
`;
export const FirstLine = styled.div`
  display: flex;

  & > p {
    color: ${colors.white};
    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;
  }

  & > span {
    color: ${colors.white};
    font-size: 12px;
    padding: 0 15px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 20px;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.lightGreen};
  left: -10px;
  top: 20px;
  z-index: -1;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
`;

export const AlamatBaru = styled.div`
  z-index: 1;
`;

export const ButtonCheck = styled.div`
  height: 100%;
`;
