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
function getSubject(teacher) {
    var subject = teacher.subject;
    if (typeof subject === "string") {
        return subject;
    }
    else if (Array.isArray(subject) && subject.length) {
        return subject[subject.length - 1];
    }
    else {
        return "";
    }
}
function getSubject2(_a) {
    var subject = _a.subject;
    if (typeof subject === "string") {
        return subject;
    }
    else if (Array.isArray(subject) && subject.length) {
        return subject[subject.length - 1];
    }
    else {
        return "";
    }
}
console.log(getSubject({ subject: ["math"] }));
var myDog = {
    name: "게터"
};
myDog.age = 3;
var position = {
    x: 30,
    y: 3
};
var product = {
    size: 30,
    position: [3, 2]
};
product.color = "주황";
product.size = 30;
var me;
me = "유미";
function checkMotion(motion) {
    return [motion];
}
var obj2 = {
    name: 'kim'
};
var test5 = function (x) {
    return +x;
};
var memberInfo = {
    name: "Kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (newName) {
        this.name = newName;
    }
};
var memberInfo2 = {
    name: "kim",
    plusOne: function (num) {
        return num + 1;
    },
    changeName: function (newName) {
        this.name = newName;
    }
};
var cutZero = function (text) {
    return text.replace(/^0/, "");
};
var removeDash = function (text) {
    return +text.replace(/-/g, "");
};
function log3(text, cutZero, removeDash) {
    var value = removeDash(cutZero(text));
    console.log(value);
}
log3("010-1111-2222", cutZero, removeDash);
