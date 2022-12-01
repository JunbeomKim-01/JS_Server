const express = require("express");

const serchPage = express.Router();


//http://localhost:3000/serchPage
serchPage.route("/")
    .get((req,res)=>{
        res.json("검색 페이지")
})
    .post((req,res,next)=>{
        res.json(req.body.keyWord)
})

module.exports = serchPage;