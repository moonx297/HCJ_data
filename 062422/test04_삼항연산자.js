//삼항 연산자 => 조건연산자
let condition = 5 > 10;     //거짓. 그렇기에 right와 삼항연산자 거짓값 표현과 표현식 2가 나타날 것.
(condition) ? console.log('left') : console.log('right');   //condition에 대해서 참이면 left, 거짓이면 right.

let result = condition?(
    console.log("삼항연산자 참값 표현   "),
    "표현식1"
):(
    console.log("삼항연산자 거짓값 표현   "),
    "표현식2"
);
console.log(result);