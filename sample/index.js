"use strict";
var myName = '유미';
var myAge = 28;
var myCity = "수원";
var hasJob = true;
var members = ['kim', 'park'];
var member = {
    name: "이유미",
    age: 28
};
var myFavoriteSong = {
    title: "wonderwall",
    singer: "Oasis"
};
var person = 3;
person = "유미";
var people = [1, '2', 3];
var obj = { a: 1234 };
var firstName;
var lastName;
var age = 3;
age - 3;
var user1 = "kim";
var age1 = undefined;
var married = false;
var 철수 = [user1, age1, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function test(x) {
    return x * 2;
}
function log(text) {
    console.log(text);
}
log("test");
function log2(text) {
    console.log(text);
}
function sum(x) {
    if (typeof x === "number") {
        console.log(x + 3);
    }
}
function test3(x) {
    var array = [];
    array[0] = x;
}
function sayHi(name) {
    var text = name ? "\uC548\uB155\uD558\uC138\uC694 ".concat(name) : "이름이 없습니다.";
    console.log(text);
}
sayHi();
function getLength(x) {
    var value = "".concat(x);
    return value.length;
}
function isMarriageable(income, hasHome, charmValue) {
    var scoreIncome = income * 1;
    var scoreHome = hasHome ? 500 : 0;
    var scoreCharm = charmValue === "상" ? 100 : 0;
    return scoreIncome + scoreHome + scoreCharm >= 600;
}
function transformNumber(array) {
    return array.map(function (i) { return +i; });
}
var numbers = transformNumber([1, "2"]);
console.log(numbers);
