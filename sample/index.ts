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
const 학교: {
    score: number[] | boolean[];
    teacher: string;
    friend: string | string[];
} = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function test(x: number): number {
    return x * 2;
}
//void; output이 없을 때 리턴 안 할 때
function log(text: string): void {
    console.log(text);
    
}
log("test");//인자 안 넣으면 에러 남.

//?하거나 text: string | undefined 하거나
function log2(text?: string): void {
    console.log(text); 
} 

//narrowing; type이 확정되지 않았을 경우 밸리데이션
function sum(x: number | string): void {
    if (typeof x === "number") { //narrowing 필요
        console.log(x + 3);
    }
    
}
//assertion; type 덮어쓰기
function test3(x: number | string) {
    let array: number[] = [];
    array[0] = x as number; //무슨 타입이 들어올지 100% 확신할 때. 사용해야 함, 남이 코드 수정할 때 사용
    //<number>x 와 같은데 태그랑 헷갈려서 안 씀
}

function sayHi(name?: string): void {
    const text = name ? `안녕하세요 ${name}` : "이름이 없습니다.";
    console.log(text);
}
sayHi();

function getLength(x: number | string): number {
    const value = `${x}`;
    return value.length; //x.toString().length
}

function isMarriageable(income: number, hasHome: boolean, charmValue: string): boolean {
    const scoreIncome = income * 1;
    const scoreHome = hasHome ? 500 : 0;
    const scoreCharm = charmValue === "상" ? 100 : 0;
    
    return scoreIncome + scoreHome + scoreCharm >= 600;
}

//narrowing; type이 확정되지 않았을 경우 밸리데이션

function transformNumber(array: (string | number)[]): number[] {
    return array.map(i => +i);
}
const numbers = transformNumber([1, "2"]);
console.log(numbers);

type Teacher = {
    subject: string | string[],
    [key: string]: string | string[]
}
function getSubject(teacher: Teacher): string {
    const {subject} = teacher;
    if (typeof subject === "string") {
        return subject;
    } else if (Array.isArray(subject) && subject.length) {
        return subject[subject.length - 1];
    } else {
        return "";
    }
}