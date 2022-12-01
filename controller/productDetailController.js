const express = require("express");
const product = express.Router();

//http://localhost:3000/product
product.post("/",async (req,res,next)=>{

});

//http://localhost:3000/product/like
product.route("/like")
    .get((req,res)=>{
    //내가 찜한 장소 제공 
    res.json(req.body.localID);
    })
    .post((req,res,next)=>{
        // body 안에 있는 localID를 찜하기
        sub();
    });
module.exports = product;