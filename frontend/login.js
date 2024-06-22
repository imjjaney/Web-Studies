// id 값을 가져와 팝업창 띄우기
function popId(){
  let inputText = document.getElementById('text').value
  if (inputText){
    alert(inputText);
  } else {
    alert('아이디를 입력하세용');
  }
  
}
// 나만의 함수 만들고, 버튼을 클릭하면 호출하기
function whenClicked() {
  alert('로그인 되었습니다');
}