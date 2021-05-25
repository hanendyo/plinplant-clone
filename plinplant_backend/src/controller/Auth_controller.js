const { register } = require("../services/Auth_service");
const pool = require("../database/Database");

module.exports = {
  REGISTER: (req, res) => {
    const body = req.body;
    const { email, password, password_verify } = req.body;
    console.log(`-----CONTROLLER!-----`);
    console.log(`BODY NYA: `, body);

    register(body, (err, result) => {
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
};
