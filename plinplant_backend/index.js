const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require('path');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// config
const app = express();

// file storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    let fieldName = file.fieldname
    if(fieldName === 'article_image_upload') {
      cb(null, './images/article_image');
    }
    if(fieldName === 'plant_image_upload') {
      cb(null, './images/plant_image');
    }
    if(fieldName === 'seed_image_upload' || fieldName === 'tuber_image_upload' || fieldName === 'young_image_upload' || fieldName === 'mature_image_upload') {
      cb(null, './images/plant_breeding_image');
    }
    if(fieldName === 'picture_upload'){
      cb(null, './images/user_image');
    }
    console.log(`FILE DES: `, file);
      
  },
  filename: (req, file, cb)=>{
      const pathname = req.path
      cb(null, pathname + '_image_' + Date.now() + path.extname(file.originalname))
  }
})
const checkFileType = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({
  storage: fileStorage,
  limits: {fileSize: 5000000},
  fileFilter: checkFileType
})
module.exports = upload;


// .env
dotenv.config();

const authRoutes = require("./src/router/Auth_router");
const plantRoutes = require("./src/router/Plant_router");

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// path
app.use("/auth", authRoutes);
app.use("/input",plantRoutes);

// Setup server
const APP_PORT = process.env.APP_PORT;
app.listen(APP_PORT, () =>
  console.log(`Server is running on port: `, APP_PORT)
);
