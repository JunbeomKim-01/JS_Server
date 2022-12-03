const express = require("express");
const lodaer = require("./loader/loader.js");
const nunjucks = require('nunjucks');
const path = require('path');

async function startServer(){
    const app = express();
    await lodaer(app);
    nunjucks.configure(path.join(__dirname, 'page'), {
        express: app,
        watch: true,
    });
    app.listen(process.env.PORT, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Your server is ready !`);
      });
}

startServer();


/*
[3계층 구조 설계]

    --<컨트롤러 레이어>--
req받고 결과를 res로 주는 역할
컨트롤러는 우리가 만드는 API라고 생각하면 쉬움 ex) app.get('get',()=>{});  이게 컨트롤러 임.

    --<서비스 레이어>--
컨트롤러가 준 데이터를 갖고 데이터를 가공하는 역할
DB 필요할 땐 데이터 링크 레이어 호출
결과를 컨트롤러에 반환해야 함.
우리가 사용할 서비스들 : 장소에대한 정보 가져오기 기능(전체 정보 가져오기 기능) , 즐겨 찾기 기능 

    --<데이터 링크레이어>--
서비스를 할 때 필요한 데이터를 DB에서 가져오거나 수정,삭제하는 역할

*/

