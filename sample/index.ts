//대부분 알아서 해줌.
let myName = '유미';
//myName = 3; 
let myAge :number = 28;
let myCity :string = "수원";
let hasJob :boolean = true;
let members :string[] = ['kim', 'park'];
//다른 타입이 들어갔을 때 에러처리해주는 것.
let member :{name :string, age :number} = {
    name: "이유미",
    age: 28
}
type song = {
    [key : string] : string
}
const myFavoriteSong :song = {
    title: "wonderwall",
    singer: "Oasis"
}
type project = {
    member : string[],
    days : number,
    started : boolean
}
let person :(number | string) = 3;
person = "유미" //가변적인 타입, union
let people :(number | string)[] = [1, '2', 3];
let obj :{a : string | number} = {a : 1234}
let firstName :any; //모든 자료형 허용으로 타입실드 해제문법임. 쓰면 안 되겠지?
let lastName :unknown; //any랑 같음. 근데 좀 더 안전함, 이유는 any 는 문자열 - 숫자해도 에러 안 나는데 이건 남.
let age :string|number = 3
age - 3; //kim이 들어가면 에러남.

let user1 :string = "kim";
let age1 :unknown = undefined; //:undefined|number
let married :boolean = false;
let 철수 :unknown[] = [user1, age1, married];
let 학교 :{
  score : (number | boolean)[],
  teacher : string,
  friend : (string | string[])  
} = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John"
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];