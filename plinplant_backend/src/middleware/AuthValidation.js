const session = require('express-session');
const jwt = require('jsonwebtoken');

function AuthValidation(req, res, next) {
  // try {
  // const token = req.cookies.token;
  const token = req.headers['x-access-token'];
  // console.log(`TOKEN VALIDATION: `, token);

  if (!token) {
    return res.status(401).json({ errorMessage: `Unauthorized` });
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'Failed to  authenticate' });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
  // req.user = verified.user; //create new property of an object (?)

  //   next();
  // } catch (err) {
  //   console.error(err);
  //   res.status(401).json({ errorMessage: "Unauthorized" });
  // }
  // try {
  //   console.log(`auth cookie: `, req);
  // } catch (err) {
  //   console.error(err);
  //   res.status(401).json({
  //     errorMessage: "unauthorized"
  //   });
  // }
}

module.exports = AuthValidation;
