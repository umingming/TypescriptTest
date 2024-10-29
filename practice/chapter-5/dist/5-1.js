"use strict";
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
}
//# sourceMappingURL=5-1.js.map