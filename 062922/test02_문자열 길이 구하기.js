//문자열 길이 구하기
//forEach이용
const arr = ['short', 'long sentence, it is not appropriate','hjahaha!','바보래용','바보바보바보바보'];

arr.forEach(str=>{
    if(str.length<10) console.log(str);     //10보다 작으면 돌려라.
});