type Color = "Black" | "White";
type FileType = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: FileType, private rank: Rank, index = 0) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }

  log() {}
}
abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: FileType, rank: Rank) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [new King("White", "E", 1), new King("Black", "E", 8)];
  }
}

// interface User {
//   age: number;
// }

interface User<Age extends number> {
  age: Age;
}
