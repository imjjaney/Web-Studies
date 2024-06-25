let server = require('./server'); // server.js 를 모듈처럼 쓸 예정
let router = require('./router');
let requestHandler = require('./requestHandler');

server.start(router.route, requestHandler.handle); // 을 했을 때만 서버가 실행되게 하자
