const userDataLink = require("../DataLayer/userDataLayer.js")
const jsonUtile = require("../utile/jsonUtility.js")

exports.signUp = async function(req,res) {
    let user = await userDataLink.findUser(req.body.id)
    console.log(user.length)
    if(user.length){
        jsonUtile.setHeader(400)
        jsonUtile.setResult({
            err:{
                message:"사용자가 이미 존재함"
            }
        })
        res.json(jsonUtile.getJosn())
    }
    else{
        userDataLink.addUser(
            req.body.id,
            req.body.password,
            req.body.name
        ).then( _=> {
            jsonUtile.setHeader(200)
            jsonUtile.setResult({
            body:{
                message:"회원가입 완료!"
            }
        })
        res.json(jsonUtile.getJosn())
    }).catch(err => {
            jsonUtile.setHeader(406)
            jsonUtile.setResult({
            err:{
                message:"Not Acceptable"
            }
        });
        res.json(jsonUtile.getJosn())
    })
}
}