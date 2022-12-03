const express = require("express");
const product = express.Router();
const likeService = require("../service/likeService.js");
const productDetailService = require('../service/producDetailService.js');

//http://localhost:3000/product
product.post("/",async (req,res,next)=> productDetailService.init(req,res));

//http://localhost:3000/product/like
product.route("/like")
    .get((req,res)=> likeService.getLikeList(req,res))
    .post((req,res,next)=> likeService.like(req,res));

module.exports = product;