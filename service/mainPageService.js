const locationDataLink = require("../DataLayer/locationDataLayer.js")
const jsonUtile = require("../utile/jsonUtility.js")

exports.init = async function(req,res) {
    let locations  = await locationDataLink.getAllLocation()
    if(locations){
        jsonUtile.setHeader(200)
        jsonUtile.setResult({
            body:{
                locationList: locations 
            }
        })
        res.json(jsonUtile.getJosn())
    }
    else{
        jsonUtile.setHeader(404)
        jsonUtile.setResult({
            err:{
                locationList: "Not Found"
            }
        })
        res.json(jsonUtile.getJosn())
    }
}