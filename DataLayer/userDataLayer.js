const User = require("../model/user.js") 

exports.getAllUsers = async function() {
    try{
        const user = await User.findAll({});
        if(user){
            return user;
        }
        return "Not found";
    }catch{}
}

exports.addUser = async function(userID,userPassword,userName) {
    User.create({
        id : userID,
        password : userPassword,
        name : userName
    })
}

exports.deletUser = async function() {
    
}

exports.updateUser = async function() {
    
}

exports.findUser = async function(userID) {
    try{
        const user = await User.findAll({
            where:{
                id:userID
            }
        });
        if(user) return user;
    }catch{}
}