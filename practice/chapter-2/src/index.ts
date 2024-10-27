console.log("Hello TypeScript!");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

const data: Teacher[] = [];

const SUBJECTS = ["국어", "수학", "사회"] as const;
type Subject = (typeof SUBJECTS)[number];
// const SUBJECTS: readonly string[] = ["국어", "수학", "사회"];

// const math: Subject = "과학";

interface Teacher {
  name: string;
  subject: string;
}

function isSubject(subject: string): subject is Subject {
  return SUBJECTS.includes(subject as Subject);
  //   return (SUBJECTS as readonly string[]).includes(subject);
}

const teachers = data.filter(({ subject }) => isSubject(subject));

console.log(isSubject("수학"));
console.log(isSubject("과학"));

let num: unknown = 30;
// console.log(num + 100);

if (typeof num === "number") {
  console.log(num + 100);
}
