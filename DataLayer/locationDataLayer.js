const Location = require("../model/location.js");


exports.findLocation = async function(locationName) {
    const location = Location.findOne({
        where: {name:locationName},
        attributes:["code","name","info"]
    });
    if(location)
        return location;
    return null;
}

exports.getAllLocation = async function() {
    try{
        const locations = await Location.findAll({
        attributes:["code","name","info"]
        });
        if(locations){
            return locations;
        }
        return null;
    }catch{}
}

