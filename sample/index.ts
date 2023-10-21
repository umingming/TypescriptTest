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