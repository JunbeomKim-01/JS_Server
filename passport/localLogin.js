const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Location = require('../model/location.js');
const User = require('../model/user.js');

module.exports = () => {
  passport.use(new Strategy({ // 전략을 등록
    usernameField: 'id', //html 필드명 , req.body.id
    passwordField: 'password' // req.body.password
  }, async (id, password, done) => {
    //console.log(id , password);
    try {
      const user = await User.findOne({ where: { id }});
      console.log(user);
      if (user.dataValues) {
        if (password == user.dataValues.password) 
          done(null, user); // 성공 시 user를 념겨 줌
        else
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
      } else
        done(null, false, { message: '가입되지 않은 회원입니다.' });
    } catch (error) {
      done(error);
    }
  }));
};
