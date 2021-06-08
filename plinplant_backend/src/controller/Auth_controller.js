const {
  postLogin,
  postRegister,
  getLogin,
} = require("../services/Auth_service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  POST_REGISTER: (req, res) => {
    try {
      const body = req.body;
      const { email, password, password_verify } = req.body;
      console.log(`-----CONTROLLER!-----`);
      console.log(`BODY CONTROLLER: `, body);

      // bycrypt
      const salt = genSaltSync(10); //--> gensalt berfungsi untuk men-generate karakter sebanyak inputan
      body.password = hashSync(body.password, salt); //--> menggabungkan  password asli dengan gensalt
      console.log(`SALT CONTROLLER: `, salt);
      console.log(`BODY PASS HASHED CONTROLLER: `, body.password);

      postRegister(body, (err, result) => {
        console.log(`-----SERVICE!-----`);
        console.log(`CODERES CONTROLLER: `, result);
        console.log(`ERR CONTROLLER: `, err);

        //validation
        if (err) {
          return res.status(400).json({
            errorMessage: "Database connection error!",
          });
        }
        if (!result) {
          return res.status(400).json({
            errorMessage: "form cannot be empty",
          });
        }
        if (result.code === "ER_DUP_ENTRY") {
          return res.status(400).json({
            errorMessage: "Email already taken!",
          });
        }
        if (!email || !password || !password_verify) {
          return res.status(400).json({
            errorMessage: "Please enter all required fields",
          });
        }
        if (password.length < 6) {
          return res.status(400).json({
            errorMessage: "Password length must be more than 6 characters ",
          });
        }
        if (password !== password_verify) {
          return res.status(400).json({
            errorMessage: "Please verify the password",
          });
        }

        return res.status(201).json({
          success: 1,
          message: "Register success",
          data: result,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  },
  POST_LOGIN: (req, res) => {
    const { email, password } = req.body;
    const body = req.body;
    const sess = req.session;
    postLogin(body, (err, result) => {
      if (err) {
        res.send({ err });
      }

      sess.user = result;
      console.log(`SESSION: `, sess);

      if (!email || !password) {
        res.status(400).json({
          success: 0,
          message: "Please enter all required fields",
        });
      }

      if (result.length > 0) {
        const hasil = compareSync(body.password, result[0].password);
        console.log(`result for body.password: `, body);
        console.log(`result for result.password: `, result[0]);
        console.log(`HASIL COMPARE: `, hasil);

        if (hasil) {
          const id = result[0].pk_user_id;
          const jsontoken = sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });

          console.log(`JSONTOKEN CONTROLLER: `, jsontoken);

          return res.json({
            message: "Login succcess",
            loggedIn: true,
            result: result,
            httpOnly: true,
          })
        } else {
          return  res.status(401).json({
            success: 0,
            message: "Invalid Email or Password",
            loggedIn: false
            // auth: false,
          });
        }
      } else {
        return  res.status(400 ).json({
          success: 0,
          message: "User doesn't exist",
          auth: false,
        });
      }
    });
  },
  GET_LOGIN: (req, res) => {
    const session = req.session.user;
    console.log(`GET_LOGIN SESSION CONTROLLER: `, req.session);

    if (session) {
      res.send({ loggedIn: true, user: session });
    } else {
      res.send({ loggedIn: false });
    }
  },
  GET_LOGGED_IN: (req, res) => {
    const token = req
    console.log(`TOKEN GET LOGGED IN CONTROLLER: `, token);
  },
  GET_LOGOUT: (req, res) => {
    res
      .cookie("userToken ", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .send();
  },
};
