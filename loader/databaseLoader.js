const { sequelize } = require('../model/index.js');

module.exports = async()=>{
    sequelize.sync({ force: false })
    .then(() => console.log('데이터베이스 연결 성공'))
    .catch(err => console.error(err));
} 
