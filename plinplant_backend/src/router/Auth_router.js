const { POST_LOGIN, POST_REGISTER, GET_LOGIN, GET_LOGOUT, GET_LOGGED_IN } = require("../controller/Auth_controller");

const router = require("express").Router();
const upload = require('../../index');
const AuthValidation = require("../middleware/AuthValidation");

// REGISTER
router.post("/register", POST_REGISTER);

// LOGIN
router.post('/login', upload.none(),POST_LOGIN)
router.get('/login',upload.none(),GET_LOGIN)

// LOGOUT
router.get('/logout', GET_LOGOUT)

// IS LOGGED IN
router.post('/loggedIn', GET_LOGGED_IN)

module.exports = router;
