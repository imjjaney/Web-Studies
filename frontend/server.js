let http = require('http'); 
// Node.js 의 모듈 (기능을 할 줄 아는 부품) 중 하나인 http
// 이를 부르는 게 require 이라는 함수
// http 모듈을 http 변수 상자에 넣어두고 쓰자.

function onRequest(request, response){
  response.writeHead(200, {'Content-Type' : 'text/html'}); 
  response.write('Hello, Node.js');
  response.end(); 
}

http.createServer(onRequest).listen(8888); 
/**
 * 서버는 들을 수 있다
 * 서버가 들을 수 있는 주파수가 8888 (어떤 클라이언트의 이야기를 들을지)
 */
