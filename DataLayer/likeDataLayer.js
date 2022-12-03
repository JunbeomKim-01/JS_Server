const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const Location = require("../model/location.js");
const User = require("../model/user.js") 
const userLikes = require("../model/userLikes.js")

exports.doLike = async function(userName,localName) {
    const _user = await User.findOne({
        where:{name : userName}
    });
    const _location = await Location.findOne({
      where:{ name : localName}
    });
    if(await _user.addLocation(_location,{through:userLikes})) return "Like!";
    else return null;
}

exports.getLikes = async function(userName) {
   try{
    const _userLikes = await User.findOne({
        where:{name : userName},
        include: [
            {
                model:Location,
                attributes:["name","info"],
                as:"Locations"
            }
        ]
    })
    if(_userLikes.toJSON()) return _userLikes.toJSON()
    else return "Not Found"
   }catch(e){ console.log(e)}
}
