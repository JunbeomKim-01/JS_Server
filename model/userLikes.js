const { sequelize } = require('../model/index.js');

userLikes = sequelize.define(
    'userLikes', 
    {}, 
    { timestamps: false });
  module.exports = userLikes