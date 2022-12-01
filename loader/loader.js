const expressLoader = require("./expressLoader");
const databaseLoader = require("./databaseLoader");

module.exports = async(expressApp)=>{
    await expressLoader(expressApp);
    console.log("express Server Init!");

    await databaseLoader();
    console.log("database init!");
}