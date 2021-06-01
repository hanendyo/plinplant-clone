const {
  postLogin,
  postRegister,
  getLogin,
} = require("../services/Auth_service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  POST_REGISTER: (req, res) => {
    const body = req.body;
    const { email, password, password_verify } = req.body;
    console.log(`-----CONTROLLER!-----`);
    console.log(`BODY NYA: `, body);

    // bycrypt
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    console.log(`SALT: `, salt);
    console.log(`BODY PASS HASHED: `, body.password);

    postRegister(body, (err, result) => {
      console.log(`-----SERVICE!-----`);
      console.log(`CODERES NYA: `, result);
      console.log(`ERR NYA: `, err);

      //validation
      if (err) {
        // cegat email yang sama
        return res.json({
          success: 0,
          message: "Database connection error!",
          data: result,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "form cannot be empty",
          data: result,
        });
      }
      if (result.code === "ER_DUP_ENTRY") {
        return res.json({
          success: 0,
          message: "Email already taken!",
          data: result,
        });
      }
      if (!email || !password || !password_verify) {
        return res.json({
          success: 0,
          message: "Please enter all required fields",
          // data: err,
        });
      }
      if (password.length < 6) {
        return res.json({
          success: 0,
          message: "Password length must be more than 6 characters ",
          // data: err,
        });
      }
      if (password !== password_verify) {
        return res.json({
          success: 0,
          message: "Please verify the password",
          // data: err,
        });
      }
      return res.status(201).json({
        success: 1,
        message: "Register success",
        data: result,
      });
    });
  },
  POST_LOGIN: (req, res) => {
    const { email, password } = req.body;
    const body = req.body;
    const sess = req.session;
    postLogin(body, (err, result) => {
      if (err) {
        res.send({ err });
      }

      // console.log(`BODY PASSWORD: `, body.password);
      // console.log(`RESULTS ONLY: `, result);
      // console.log(`RESULTS PASSWORD: `, result[0].password);

      sess.user = result;
      console.log(`SESSION: `, sess);

      if (!email || !password) {
        return res.json({
          success: 0,
          message: "Please enter all required fields",
        });
      }

      if (result.length > 0) {
        const hasil = compareSync(body.password, result[0].password);
        // console.log(`HASIL: `, hasil);
        console.log(`result for jwt: `, result);

        if (hasil) {
          const id = result[0].pk_user_id;
          const jsontoken = sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });

          console.log(`SIGN: `, sign);
          console.log(`JSONTOKEN: `, jsontoken);

          return res.json({
            success: 1,
            message: "Login succcess",
            auth: true,
            token: jsontoken,
            result: result,
          });
        } else {
          return res.json({
            success: 0,
            message: "Invalid Email or Password",
            auth: true,
          });
        }
      } else {
        return res.json({
          success: 0,
          message: "User doesn't exist",
          auth: true,
        });
      }
    });
  },
  GET_LOGIN: (req, res) => {
    const session = req.session.user;
    console.log(`GET_LOGIN SESSION: `, req.session);

    if (session) {
      res.send({ loggedIn: true, user: session });
    } else {
      res.send({ loggedIn: false });
    }
  },
  GET_LOGOUT: (req, res) => {
    res
      .cookie("userId", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .send();
  },
};
