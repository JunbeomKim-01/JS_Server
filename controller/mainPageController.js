const express = require('express');
const mainPage = express.Router();
const mainPageService = require("../service/mainPageService.js");

//http://localhost:3000/mainPage
mainPage.use("/",async (req,res,nex)=> mainPageService.init());

module.exports = mainPage;