const express = require("express");
const serchPage = express.Router();
const serchPageService = require("../service/serchService.js");

//http://localhost:3000/serchPage
serchPage.route("/")
    .get((req,res)=> serchPageService.init(req,res))
    .post((req,res,next)=> serchPageService.serch(req,res))

module.exports = serchPage;