declare let myName: string;
declare let myAge: number;
declare let myCity: string;
declare let hasJob: boolean;
declare let members: string[];
declare let member: {
    name: string;
    age: number;
};
type song = {
    [key: string]: string;
};
declare const myFavoriteSong: song;
type project = {
    member: string[];
    days: number;
    started: boolean;
};
declare let person: (number | string);
declare let people: (number | string)[];
declare let obj: {
    a: string | number;
};
declare let firstName: any;
declare let lastName: unknown;
declare let age: string | number;
declare let user1: string;
declare let age1: unknown;
declare let married: boolean;
declare let 철수: unknown[];
declare const 학교: {
    score: number[] | boolean[];
    teacher: string;
    friend: string | string[];
};
declare function test(x: number): number;
declare function log(text: string): void;
declare function log2(text?: string): void;
declare function sum(x: number | string): void;
declare function test3(x: number | string): void;
declare function sayHi(name?: string): void;
declare function getLength(x: number | string): number;
declare function isMarriageable(income: number, hasHome: boolean, charmValue: string): boolean;
declare function transformNumber(array: (string | number)[]): number[];
declare const numbers: number[];
