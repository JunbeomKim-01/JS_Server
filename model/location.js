const Sequelize = require('sequelize');

module.exports = class Location extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            code: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            postion: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            info:{
                type:Sequelize.STRING(300),
                allowNull:true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Location',
            tableName: 'location',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Location.belongsToMany(db.User, { 
            through: "userLikes",
            as:'Users',
        });
    }
};
