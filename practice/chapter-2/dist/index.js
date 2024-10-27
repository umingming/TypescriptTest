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
}
const teachers = data.filter(({ subject }) => isSubject(subject));
console.log(isSubject("수학"));
console.log(isSubject("과학"));
//# sourceMappingURL=index.js.map