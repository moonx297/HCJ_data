//arr.find() : 배열 중 찾아라. 정렬을 반드시 해야 find가 가능하다.

const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 23},
    {name: '혜림', age: 26},
];

const myFriend = arr.find(a => a.age == 5);        //age가 30 인 사람을 찾아라.
console.log(myFriend);