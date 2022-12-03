const passport = require('passport');
const jsonUtile = require('../utile/jsonUtility.js')

exports.localLogin = (req,res,next) => passport.authenticate('local', (authError, user, info) => { //done(user) -> 현재 콜백에 user를 받아 다음 함수가 호출됨
    if (user) req.login(user, loginError => {// 로그인 성공
        jsonUtile.setHeader(200)
        jsonUtile.setResult({
            body:{
                message:"회원 : "+ req.session.passport.user + " 로그인 성공",
                session:req.session
            }
        })
        res.json(jsonUtile.getJosn());
    });
    else {//로그인 실패
        jsonUtile.setHeader(401)
        jsonUtile.setResult({
            err:{
                message:"Bad Request",
            }
        })
        res.json(jsonUtile.getJosn());
    };
})(req, res, next);