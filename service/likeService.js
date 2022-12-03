const likeDataLink = require("../DataLayer/likeDataLayer.js")
const jsonUtile = require('../utile/jsonUtility.js')

exports.like = async function(req,res){
    if(req.user){// 세션이 존재할 떄
        let result = await likeDataLink.doLike(req.user.name,req.body.localName)
        if(result){ // 결과가 존재할 떄
            jsonUtile.setHeader(200)
            jsonUtile.setResult({
                body:{
                    message:result
                }
            })
        }else{// 결과가 존재하지 않을 때
            jsonUtile.setHeader(404)
            jsonUtile.setResult({
                err:{
                message:"Not Found"
            }
        })
        }
    }
    else{// 세션이 존재하지 않을 떄
        jsonUtile.setHeader(401)
        jsonUtile.setResult({
            err:{
                message:"회원 가입이 필요합니다."
            }
        })
    }
        res.json(jsonUtile.getJosn())
}

exports.getLikeList = async function(req,res) {
    if(req.user){ // 세션이 존재할 때 
        let result = await likeDataLink.getLikes(req.user.name)
        if(result){ // 결과가 존재할 떄
            jsonUtile.setHeader(200)
            jsonUtile.setResult({
                body:{
                    Likes:result.Locations
                }
            })
        }else{// 결과가 존재하지 않을 떄
            jsonUtile.setHeader(404)
            jsonUtile.setResult({
                err:{
                message:"Not Found"
            }
        })
        }
    }
    else { // 세션이 존재하지 않을 떄
        jsonUtile.setHeader(401)
        jsonUtile.setResult({
            err:{
                message:"회원 가입이 필요합니다."
            }
        })
    }
        res.json(jsonUtile.getJosn())
}