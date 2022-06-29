// var과 ES6에서 추가된 let과의 차이
//let은 범위와 중복불허
if(true){
    var functionScropeValue = 'global';
    let blockScropValue = 'local';
}
console.log(functionScropeValue);
console.log(blockScropValue);