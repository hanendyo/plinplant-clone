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
    .post("http://localhost:5000/auth/register", form)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
