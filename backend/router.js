function route(pathname, handle, response) {

  console.log('pathname : ' + pathname); 

  if (typeof handle[pathname] == 'function'){
    handle[pathname](response) ; 
  } else {
    response.writeHead(404, {'Content-Type' : 'text/html'}); 
    response.write('Not Found !!! ');
    response.end(); 
  }
}

// router 가 route 로 일을 분배할 때, handle 에게 일을 시킴 

// route 함수를 파일 외부에서도 사용하기 위해 
// 그리고 이걸 서버에서 부르자
exports.route = route; 
