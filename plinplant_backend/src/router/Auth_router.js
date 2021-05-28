const { REGISTER } = require("../controller/Auth_controller");

const router = require("express").Router();
// const upload = require('../../index')

router.post("/register", REGISTER);

module.exports = router;
