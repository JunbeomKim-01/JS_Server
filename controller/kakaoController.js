const express = require('express');
const passport = require('passport');
const kakaoLogin = express.Router();

//http://localhost:3000/kakao
kakaoLogin.get('/', passport.authenticate('kakao'));

//http://localhost:3000/kakao/callback
kakaoLogin.get('/callback',
        passport.authenticate('kakao', { failureRedirect: '/kakao' }),
        (req, res) => res.redirect('/')
  );

module.exports = kakaoLogin;