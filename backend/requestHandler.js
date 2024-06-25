
// 라우터가 루트를 분배해서 각 경로를 알려주면, 각 경로에서 무엇을 할지 알려줌

function main(response){
  console.log('main was called');

  response.writeHead(200, {'Content-Type' : 'text/html'}); 
  response.write('Main Page');
  response.end(); 
}

function login(response){
  console.log('login was called');

  response.writeHead(200, {'Content-Type' : 'text/html'}); 
  response.write('Login Page');
  response.end(); 
}

// favicon 핸들러 
function favicon(response) {
  response.writeHead(204); // No Content
  response.end();
}

// handle 객체의 정의
const handle = {}; // key:value 쌍으로 이루어진 변수 상자 
handle['/'] = main; // 이 경로의 얘들은 main() 함수로 감
handle['/login'] = login; // 이 경로의 얘들은 login() 함수로 감 
handle['/favicon.ico'] = favicon ; // favicon 요청 처리 

exports.handle = handle; 
exports.main = main;
exports.login = login;
exports.favicon = favicon; 
