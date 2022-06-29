//객체 -> 속성접근/추가/수정/삭제

let family = {
    'address' : 'Seoul',
    members: {},
    addFamily: function(age, name, role){
        this.members[role]={
            age:age,
            name:name
        };
    },
    getHeadcount: function(){
        return Object.keys(this.members).length
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, '댕댕이', 'dog');

let printMembers = function(){
    let members = family.members;
        for(role in members){
            console.log('role=>' + role + ', name=> '+ members[role].name
            +', age=> ' + members[role].age);
    }   
};
printMembers();

let members = family.members;
members['nephew']= {age:3, name:'hyun'};         //삽입
members.niece = {age:5, name:'lyn'};             //수정
delete members.aunt;    //속성 이용 지우기        //삭제
delete members['dog'];  //배열 이용해서 지우기     //삭제
printMembers();

// console.log(family.getHeadcount());