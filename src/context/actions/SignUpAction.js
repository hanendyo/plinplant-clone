import axios from "axios";

export const signUpAction = (data, value) => {
  return {
    type: "SET_SIGN_UP",
    data,
    value,
  };
};

export const signUpAPI = async (form) => {
  console.log("FORM SIGN UP: ", form);
  axios
    .post("http://localhost:8081/auth/register", form)
    .then((res) => {
      console.log(`REGISTER POST ACTION: `, res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
