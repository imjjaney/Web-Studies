let server = require('./server'); // server.js 를 모듈처럼 쓸 예정
let router = require('./router')

server.start(router.route); // 을 했을 때만 서버가 실행되게 하자

