//대문자 => 기호상수. 기호상수는 값을 바꾸지 못한다.
//const 에러 유형 - 모두 실행 안됨
const URL = 'http://js.com';
//var URL = 'http://js.com';

URL = 'http://www.naver.com';

if(true){
  const URL2 = 'http://js.com';
   // var URL2 = 'http://js.com';
}

console.log(URL2);