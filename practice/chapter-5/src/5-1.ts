// type Color = "Black" | "White";
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

// interface User<Age extends number> {
//   age: Age;
// }

interface MyMap<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

type ClassConstructor<T> = new (...args: any[]) => T;

function withEZDebug<
  C extends ClassConstructor<{
    getDebugValue(): object;
  }>
>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
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
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return { id: this.id, name: `${this.firstName} ${this.lastName}` };
  }
}

let User = withEZDebug(HardToDebugUser);
let user = new User(3, "유미", "이");
console.log(user.debug());
