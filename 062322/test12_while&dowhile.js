//while문과 do~while문 사용
const hometown = [      //const : 바꿀생각 없을때.  //초기값 선언.[]:배열 {}: 키와 값을 나타내는 object
    {name: '진', place: '과천'},
    {name: '남준', place: '일산', city: '고양'},
    {name: '호석', place: '광주', city: '경상도'},
    {name: '지민', place: '부산', city: '전라도'},
];

let isHometown = function(h, name){     //함수 만들기. 호출은 아직 아님.
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);      
    //'' 작은 따옴표는 틀린것. 백틱을 써야한다 : `` 

    if(h.name === name) {       //점프문. 호석을 찾는 순간 true를 isHometown에게 넘기고, 그게 result값에 들어간다. if(result) break; 에서 result는 true이기 때문에 break가 걸리고 거기서 멈춘다.
        console.log(`${h.name}의 고향은 ${h.city} ${h.place}입니다.`);  //백틱
        return true;
    }
    return false;
}

let h;      //만든 함수 여기서 실행하기. 여기서부터가 실제 실행 시작. 첫번째 실행: while
while (h=hometown.shift()){
    if(!h.name || !h.place || !h.city) continue;
    //name, place, city 셋중 하나라도 비어있으면 넘어가라. 진의 city는 비어있으니까 shift해서 지나갔다. 

    var result = isHometown(h, '호석'); //남준이는 셋 다 있기 때문에 isHometown이 실행되었다.
    if(result) break;
}

let i = 0;  //두번째 실행: do while
const names = ['진', '남준', '호석', '지민'];
const cities = ['경기', '부산', '대구', '광주'];  //const : 값을 바꾸지 않겠다라는 뜻
do{
    hometown[i] = {name: names[i], city:cities[i]};
    i++;
}while(i<4);

//console.log(hometown);    --> 배열 따지지 말고 다 내놔라. 다 출력해라 라는 뜻.
