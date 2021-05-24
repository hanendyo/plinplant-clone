const { REGISTER } = require("../controller/Auth_controller");

const router = require("express").Router();

router.post("/register", REGISTER);

module.exports = router;
