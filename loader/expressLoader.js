const express = require('express');
const passport = require('passport');
const passportConfig = require('../passport/index.js');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const kakaoLoginContorller = require("../controller/kakaoController.js");
const mainPageContorller = require("../controller/mainPageController.js");
const serchPageContorller = require("../controller/serchPageController.js");
const productPageContorller = require("../controller/productDetailController.js");
const loginService = require("../service/loginService.js");
const logoutService = require("../service/logoutService.js");
const signupService = require("../service/signupService");
dotenv.config();
module.exports = async (expressApp) => {
  expressApp.set('port', process.env.PORT || 3000);
  expressApp.set('view engine', 'html');
  expressApp.use(
      morgan('dev'),
      express.static(path.join(__dirname, 'public')),
      express.json(),
      express.urlencoded({ extended: false }),  
      session({
          resave: false,
          saveUninitialized: false,
          secret: process.env.SECRET,
          cookie: {
              httpOnly: true,
              secure: false
          },
          name: 'session-cookie'
      })
  );
  passportConfig();
  expressApp.use(passport.initialize());
  expressApp.use(passport.session());

  //http://localhost:3000/user
  expressApp.get("/user",async (req,res,next)=>{})

  //http://localhost:3000/login
  expressApp.post('/login', (req, res, next) => loginService.localLogin(req,res,next));

  //http://localhost:3000/signup
  expressApp.post('/signup', (req, res, next) => signupService.signUp(req,res));

  //http://localhost:3000/logout
  expressApp.get('/logout', (req, res, next) => logoutService.logout(req,res));

  //http://localhost:3000/kakao
  expressApp.use('/kakao', kakaoLoginContorller);

  //http://localhost:3000/mainPage
  expressApp.use('/mainPage',mainPageContorller);

  //http://localhost:3000/serchPage
  expressApp.use("/serchPage",serchPageContorller);

  //http://localhost:3000/product
  expressApp.use("/product",productPageContorller);

return expressApp
}