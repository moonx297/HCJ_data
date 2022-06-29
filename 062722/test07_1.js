//const의 정상적인 실행 예제
//const는 재할당은 가능하지만 새로운 객체로 할당은 못하고 
//객체 내부의 상태만 변경할 수 있다
const CONST_USER = {name: 'jay', age: 28};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 38;
console.log(CONST_USER.name, CONST_USER.age);
// CONST_USER = {name: 'bbo'};

// const myName = 'Kim';
// myName = 'Lee';