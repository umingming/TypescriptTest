"use strict";
class Position {
    constructor(file, rank, index = 0) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
        };
    }
    log() { }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [new King("White", "E", 1), new King("Black", "E", 8)];
    }
}
function withEZDebug(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        debug() {
            const { name } = this.constructor;
            const value = this.getDebugValue();
            return `${name}(${JSON.stringify(value)})`;
        }
    };
}
class HardToDebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return { id: this.id, name: `${this.firstName} ${this.lastName}` };
    }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, "유미", "이");
console.log(user.debug());
//# sourceMappingURL=5-1.js.map