let x = 5;      //숫자형
let y = 'five';     //문자형
var isTrue = true;     //불린형(Boolean)
var empty = null;       //null 
var nothing;        //undefined
var sym = Symbol('me');     //Symbol

let item = {
    price : 5000,
    count : 10
};  //객체(Object) 한번에 몰아넣을 수 있다.


///----------------------------------------------------상위 내용은 데이터의 종류


let fruits = ['apple', 'orange', 'kiwi'];   //배열선언
let addFruit = function(fruit) {
    fruits.push(fruit);
}   //함수

addFruit('watermelon'); //함수실행
console.log(fruits);    //콘솔 출력