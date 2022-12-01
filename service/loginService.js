const passport = require('passport');

exports.localLogin = (req,res,next) => passport.authenticate('local', (authError, user, info) => { //done(user) -> 현재 콜백에 user를 받아 다음 함수가 호출됨
    if (user) req.login(user, loginError => res.redirect('/'));//login()은 user 전달하면서 직렬화 호출
    else next(`Login fail!`);
})(req, res, next);