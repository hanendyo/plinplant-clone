import {
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../image/signin_bg.png";
import { ContextStore } from "../../../context/store/ContextStore";
import { signInAction } from "../../../context/actions/SignInAction";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../../context/actions/userLoginAction";
import { colors } from "../../../master/constant/style";
import { Container, FormLogin } from "./SignIn.elemen";
import AlertSign from "../../../master/components/additional/AlertSign";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      PlinPlant {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignIn = ({ match }) => {
  const history = useHistory();

  const context = useContext(ContextStore);
  const { signInState, signInDispatch, userLoginDispatch } = context;

  const [notif, setNotif] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   console.log(match.params.prev);
  // }, [match.params.prev]);

  // ::: MATERIAL UI TEMPLATE SETUP :::
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // ::: END OF MATERIAL UI TEMPLATE SETUP :::

  //! axios crendentials
  axios.defaults.withCredentials = true;

  const signInAPI = async (form) => {
    const data = new FormData();
    data.append("email", form.email);
    data.append("password", form.password);

    try {
      let res = await axios.post("http://localhost:8081/auth/login", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // getDataSignInAPI();
      // console.log(`SIGNIN API RES: `, res);
      return res;
    } catch (err) {
      // console.log(`ERROR!`);
      // console.log(err);
      return err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST TO API
    // console.log(`sign in data: `, signInState);
    const params = match.params.prev.split("&");

    if (!signInState.email || !signInState.password) {
      setError("empty");
      setNotif(true);
    } else {
      signInAPI(signInState).then((res) => {
        // getDataSignInAPI();
        // console.log(`SUBMIT RES: `, res);

        userLoginDispatch(userLogin(res.data));

        if (res.status === 200) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));

          setError("success");
          setNotif(true);

          setTimeout(() => {
            if (params[0] === "shop")
              history.push(`/shop/${params[1]}/${params[2]}`);

            if (params[0] === "landingpage") history.push(`/`);

            if (params[0] === "ensiklopedia")
              history.push(`/ensiklopedia/${params[1]}/${params[2]}`);
          }, 3000);
        } else {
          setError("login");
          setNotif(true);
        }

        // console.log(`res submit: `, res);
      });
    }

    setTimeout(() => {
      setError("");
      setNotif(false);
    }, 5000);
  };

  return (
    <main style={{ backgroundColor: colors.white }}>
      <Container>
        <div>
          <FormLogin>
            <h1>PlinPlant</h1>

            <p>Masukkan email dan password.</p>

            <form
              encType="multipart/form-data"
              onSubmit={(e) => handleSubmit(e)}
              noValidate
              autoComplete="off"
            >
              {/* Email input */}
              <TextField
                className="form-field"
                required
                placeholder="Masukkan Email"
                id="outlined-basic"
                label="Email"
                value={signInState.email}
                onChange={(e) =>
                  signInDispatch(signInAction("email", e.target.value))
                }
                variant="outlined"
              />
              <FormControl className="form-field" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  label="Password"
                  placeholder="Masukkan Password"
                  required
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={signInState.password}
                  onChange={(e) =>
                    signInDispatch(signInAction("password", e.target.value))
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              {/* Sign In button */}
              <Button
                className="btn-login"
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign In
              </Button>
            </form>
            <p>
              Belum punya akun PlinPlant?{" "}
              <Link to={`/register/${match.params.prev}`}>Daftar</Link>
            </p>
          </FormLogin>

          <img src={bgImage} alt="" />
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>

        <AlertSign auth error={error} notif={notif} />
      </Container>
    </main>
  );
};

export default SignIn;
