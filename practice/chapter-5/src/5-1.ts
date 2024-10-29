type Color = "Black" | "White";
type FileType = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: FileType, private rank: Rank) {}
}

class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: FileType, rank: Rank) {
    this.position = new Position(file, rank);
  }
}
