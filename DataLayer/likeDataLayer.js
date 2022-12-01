
const Location = require("../model/location.js");
const User = require("../model/user.js") 

exports.doLike = async function(params) {
    const _user = await User.findAll({
        where:{id : userID}
    });
    const _location = await Location.findAll({
      where:{id : localID}
    });
    _user.addLocation(_location,{through : Like});
}

exports.getLikes = async function(params) {
    await User.getLocation({});
}
