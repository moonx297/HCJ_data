//배열 정렬하기(sort)

const numArr1 = [2,0,3,4,1];
const numArr2 = [2,0,3,4,1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'chloe'},
];

numArr1.sort(function(a, b){return a-b;});
numArr2.sort(function(a, b){return b-a;});
objArr.sort(function(a,b){
    if(a.name > b.name) return 1;   // a name이 b name보다 크면 return 1로 반환! return1은 그냥 지나가라는 뜻
    else if (b.name > a.name) return -1;
    else return 0;      // 1도 -1도 아닌 경우 -> 같은 경우
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);