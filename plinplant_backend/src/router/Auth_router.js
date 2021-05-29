const { REGISTER, LOGIN } = require("../controller/Auth_controller");

const router = require("express").Router();
// const upload = require('../../index')

router.post("/register", REGISTER);
router.post('/login', LOGIN)

module.exports = router;
