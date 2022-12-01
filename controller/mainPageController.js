const express = require('express');
const mainPage = express.Router();


//http://localhost:3000/mainPage
mainPage.use("/",async (req,res,nex)=>{

    //메인 페이지의 정보들을 불러 온다.
    //mainPage 호출 
});

/*
//http://localhost:3000/login
mainPage.get("/login",(req,res,next)=>{});


//http://localhost:3000/locationID=정동진
mainPage.get("/:locationID",(req,res,next)=>{
    //해당 장소에 대한 정보를 가져옴
});

//http://localhost:3000/정동진/like
mainPage.get("/:locationID/like",(req,res,next)=>{
    //좋아요 기능
    //해당 장소를 데이터 베이스에 저장
});
*/ 

module.exports = mainPage;