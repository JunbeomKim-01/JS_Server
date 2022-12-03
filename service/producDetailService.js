const locationDataLink = require("../DataLayer/locationDataLayer.js")
const jsonUtile = require("../utile/jsonUtility.js")

exports.init = async function(req,res) {
    let location  = await locationDataLink.findLocation(req.body.localName)
    if(location){
        jsonUtile.setHeader(200)
        jsonUtile.setResult({
            body:{
                location: location 
            }
        })
        res.json(jsonUtile.getJosn())
    }
    else{
        jsonUtile.setHeader(404)
        jsonUtile.setResult({
            err:{
                location: "Not Found"
            }
        })
        res.json(jsonUtile.getJosn())
    }
}