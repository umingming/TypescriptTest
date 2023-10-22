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
type Teacher = {
    subject: string | string[];
    [key: string]: string | string[];
};
declare function getSubject(teacher: Teacher): string;
declare function getSubject2({ subject }: {
    subject?: string | string[];
}): string;
type Animal = {
    readonly name: string;
    age?: number;
};
declare const myDog: Animal;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
    y: number | string;
};
type PositionY = {
    y: number | string;
};
type Position = PositionX & PositionY;
declare const position: Position;
type Product = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let product: Product;
type Employee = {
    name: string;
    phone: number;
    email: string;
    isMinor: boolean;
};
declare let me: "유미" | "이유미";
type Motion = "가위" | "바위" | "보";
declare function checkMotion(motion: Motion): Motion[];
declare var obj2: {
    readonly name: "kim";
};
type Test = (x: string) => number;
declare let test5: Test;
type Plus = (a: number) => number;
declare let memberInfo: {
    name: string;
    plusOne(a: number): number;
    changeName(newName: string): void;
};
type Member = {
    name: string;
    age?: number;
    plusOne: (x: number) => number;
    changeName: (x: string) => void;
};
declare let memberInfo2: Member;
type Cut = (text: string) => string;
type ToNumber = (text: string) => number;
declare const cutZero: Cut;
declare const removeDash: ToNumber;
declare function log3(text: string, cutZero: Cut, removeDash: ToNumber): void;
