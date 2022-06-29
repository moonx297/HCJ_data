// Switch~case 문
var subject = '파이';
switch(subject){
    case 'C언어' : 
        console.log('초보자를 위한 C++ 200제');
        break;
    case '자바스크립트' : 
        console.log('초보자를 위한 자바스크립트 200제');
        break;
    case '파이썬' : 
        console.log('초보자를 위한 파이썬 200제');
        break;
    default :
        console.log("정확한 언어를 입력하세요");
        //we dont need break after default

}