const locationDataLink = require("../DataLayer/locationDataLayer.js")
const jsonUtile = require("../utile/jsonUtility.js")

exports.init = function(req,res) {
    res.json("검색 페이지")
}

exports.serch = async function(req,res) {
    let serchResult = await locationDataLink.findLocation(req.body.keyWord)
    if(serchResult){
        jsonUtile.setHeader(200)
        jsonUtile.setResult({
            body:serchResult
    })
    res.json(jsonUtile.getJosn())
    }
    else{
        jsonUtile.setHeader(404)
        jsonUtile.setResult({
            err:"Not Found"
    })
    res.json(jsonUtile.getJosn())
    }
}