const Location = require("../model/location.js");


exports.addLocation = async function(params) {
    
}

exports.findLocation = async function(locationID) {
    const location = Location.findOne({
        where: {name:locationID}
    });
    if(location)
        return location;
    return "Not found";
}

exports.getAllLocation = async function() {
    try{
        const locations = await Location.findAll({});
        if(locations){
            return locations;
        }
        return "Not found";
    }catch{}
}

