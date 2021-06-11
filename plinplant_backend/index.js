const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');

// config
const app = express();

// file storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fieldName = file.fieldname;

    console.log(`FIELDNAME USER: `, fieldName);
    console.log(`REQ MULTER USER: `, req.file);

    if (fieldName === 'article_image_upload') {
      cb(null, '../public/images/article_image');
    }
    if (
      fieldName === 'plant_image_upload' ||
      fieldName === 'seed_image_upload' ||
      fieldName === 'tuber_image_upload' ||
      fieldName === 'young_image_upload' ||
      fieldName === 'mature_image_upload'
    ) {
      cb(null, '../public/images/Plant');
    }

    if (fieldName === 'picture_upload') {
      cb(null, '../public/images/user_image');
    }

    if (fieldName === 'payment_image_upload') {
      cb(null, '../public/images/payment_image');
    }
    console.log(`FILE DES: `, file);
  },
  filename: (req, file, cb) => {
    // const pathname = req.path;
    cb(null, file.originalname);
  },
});
const checkFileType = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: fileStorage,
  limits: { fileSize: 5000000 },
  fileFilter: checkFileType,
});
module.exports = upload;

// .env
dotenv.config();

const authRoutes = require('./src/router/Auth_router');
const plantRoutes = require('./src/router/Plant_router');
// middleware
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    key: 'userToken',
    secret: 'secretcode',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// path
app.use('/auth', authRoutes);
app.use('/input', plantRoutes);

// testing path
// app.use('/checkUserAuth', AuthValidation, (req, res) => {
//   res.send('you are authenticated!')
// })

// Setup server
const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () =>
  console.log(`Server is running on port: `, APP_PORT)
);
