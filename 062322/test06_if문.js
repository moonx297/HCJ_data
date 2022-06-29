//if문
var result = false;
if(result) console.log('result가 참입니다');        //result = true 일때 'result가 참입니다.'
if(!result)                                        //result = false 일때 '실행되지 않습니다.'
    console.log('실행되지 않습니다.');

if(!result) {
    console.log('result의 결과');
    console.log('>> 거짓 입니다.');
}
