// for - .length
const hometown = [      //const : 
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '희인', place: '창원', city: '경상도'},
    {name: '안녕', place: '안산', city: '전라도'},
];

for(var i=0; i<hometown.length; i++){
    var h = hometown[i];

    if(!h || !h.city) continue;     //0번째에는 city가 있어서 continue로 반복문을 돌리지 않고 밑으로 내려가서 0번째 실행입니다. 출력. 
                                    //1번째에는 city가 없어서 for 문으로 반복하여 2번으로 돌림. 

    console.log(i+'번째 실행입니다.');

    if(h.name=='희인'){ //점프문    //2번째의 이름은 희인. 이름이 희인일때 밑으로 내려가서 희인의 고향은 경상도 창원입니다. 라고 출력!
        console.log(h.name + '의 고향은 ' + h.city+ ' '+h.place+'입니다.');
        break;
    }
}