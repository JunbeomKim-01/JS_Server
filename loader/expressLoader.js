const express = require('express');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const mainPage = require("../controller/mainPageController.js");
const serchPage = require("../controller/serchPageController.js");
const productPage = require("../controller/productDetailController.js");
dotenv.config();
const passportConfig = require('../passport/index.js');

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
  expressApp.get("/user",async (req,res,next)=>{

  })

//http://localhost:3000/login
  expressApp.post('/login', (req, res, next) => { //로컬 전략
    passport.authenticate('local', (authError, user, info) => { //done(user) -> 현재 콜백에 user를 받아 다음 함수가 호출됨
        if (user) req.login(user, loginError => res.redirect('/'));//login()은 user 전달하면서 직렬화 호출
        else next(`Login fail!`);
    })(req, res, next);
});
//http://localhost:3000/sigin
expressApp.post('/sigin', (req, res, next) => {
  res.json(req.body)
});

//http://localhost:3000/logout
    expressApp.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
    });

//http://localhost:3000/kakao
    expressApp.get('/kakao', passport.authenticate('kakao'));

//http://localhost:3000/kakao/callback
    expressApp.get('/kakao/callback',
        passport.authenticate('kakao', { failureRedirect: '/' }),
        (req, res) => res.redirect('/')
    );
  //http://localhost:3000/mainPage
  expressApp.use('/mainPage',mainPage);

  //http://localhost:3000/mapPage
  //expressApp.use("/mapPage",mapPage);

  //http://localhost:3000/serchPage
  expressApp.use("/serchPage",serchPage);

  //http://localhost:3000/product
  expressApp.use("/product",productPage);

return expressApp
}