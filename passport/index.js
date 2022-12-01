const passport = require('passport');
const kakao = require('./kakaoLogin.js');
const User = require('../model/user.js');
const local = require('./localLogin.js');

module.exports = () => {
    passport.serializeUser((user, done) => {//로그인 할 때만 , 콜백함수를 등록하고 있음
      done(null, user.id);// user.id = 세션키 , 사실상 req.session.passport.user에 저장
      });
  
    passport.deserializeUser((id, done) => { //실제 서버에 요청되면 이게 실행됨 ,현재 세션에 저장된 user를 데이터 베이스의 user와 비교하는 녀셕
      User.findOne({
        where: { id }
      })
      .then(user => done(null, user))// req.user가 가능
      .catch(err => done(err));
    });
    local();
    kakao();
  };