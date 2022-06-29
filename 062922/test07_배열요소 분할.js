//배열 요소를 분할 / 변환 (from)
const str = '12345678';

const distributeArr = Array.from(str);  //문자
console.log(distributeArr);

const modifiedArr = Array.from(distributeArr, el => el* 2);     //위에 문자열이 숫자로 바뀌었다. (string -> int로)
console.log(modifiedArr);