import axios from "axios";

export const userLogin = (data) => ({ type: "USER_LOGIN", payload: data });

export const userPictureUpdate = (data) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:8081/input/user_update/filename`,
    data
  );

  // console.log('USER FILENAME UPDATED !!!', res);

  dispatch({ type: "USER_UPDATE_FILEIMG", payload: data });
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: "USER_LOGOUT" });
};
