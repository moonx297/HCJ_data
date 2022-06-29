//ES6에 추가된 화살표 함수( => )/ function을 => 화살표로 축약시키기

// 1.

const double = x => x + x;

/*
function double(x){
    return x + x ;
}
*/
console.log(double(2));


// 2. add 중요!

//const add = (a,b) => a+b;

function add(a,b){
    return a + b ;
}
console.log(add(1,2));

// 3. sum 중요!

const sum = (...args) => {
//function sum(...args){
    
    let total = 0;
    for(let i = 0; i<args.length; i++){
        total += args[i];
    }
    return total;
    
}
console.log(sum(1,2,3));

setTimeout(()=> {
    console.log('화살표 함수')
}, 10);