const http = require('http'); 
const url = require('url'); 
// Node.js 의 모듈 (기능을 할 줄 아는 부품) 중 하나인 http
// 이를 부르는 게 require 이라는 함수
// http 모듈을 http 변수 상자에 넣어두고 쓰자

function start(route, handle){
  function onRequest(request, response){
    let pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
    console.log('pathname : ' + pathname); 
    route(pathname, handle, response); // route 에게 pathname 을 넣어준다. 
  }
  
  http.createServer(onRequest).listen(8888); 
  console.log("Server has started and is listening on port 8888.");
}

exports.start = start;
