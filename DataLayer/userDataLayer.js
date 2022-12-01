const User = require("../model/user.js") 

exports.getAllUsers = async function(userID) {
    try{
        const user = await User.findAll({});
        if(user){
            return user;
        }
        return "Not found";
    }catch{}
}

exports.addUser = async function(params) {
    
}

exports.deletUser = async function(params) {
    
}

exports.updateUser = async function(params) {
    
}

exports.findUser = async function(params) {

}