const express = require('express');
const mainPage = express.Router();


//http://localhost:3000/mainPage
mainPage.use("/",async (req,res,nex)=>{

    //메인 페이지의 정보들을 불러 온다.
    //mainPage 호출 
});

module.exports = mainPage;