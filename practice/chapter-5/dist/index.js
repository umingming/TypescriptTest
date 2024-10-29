"use strict";
console.log("Hello TypeScript!");
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b,
};
let d = c.apple * 4;
const data = [];
const SUBJECTS = ["국어", "수학", "사회"];
function isSubject(subject) {
    return SUBJECTS.includes(subject);
    //   return (SUBJECTS as readonly string[]).includes(subject);
}
const teachers = data.filter(({ subject }) => isSubject(subject));
console.log(isSubject("수학"));
console.log(isSubject("과학"));
let num = 30;
// console.log(num + 100);
if (typeof num === "number") {
    console.log(num + 100);
}
//# sourceMappingURL=index.js.map