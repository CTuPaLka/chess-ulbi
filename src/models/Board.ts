import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  // ячейки представляют собой двумерный массив строк и столбцов. По сути матрица
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        // если остаток от деления суммы i + j на 2 не равен нулю, то один цвет. Иначе другой
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // черный
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // белый
        }
      }
      this.cells.push(row);
    }
  }

  public highLightCells(selectedCell: Cell | null){
	for(let i = 0; i < this.cells.length; i++){
		const row = this.cells[i];
		for(let j = 0; j < row.length; j++){
			const target = row[j];
			// два знака !! преобразуют итоговое значение к булевому флагу
			target.available = !!selectedCell?.figure?.canMove(target)
		}
	}
  }

  public getCopyBoard(): Board{
	const newBoard = new Board();
	newBoard.cells = this.cells;
	return newBoard;
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  //   приватный потому что эти методы будут использоваться только внутри этого класса
  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addBishop() {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private addKnights() {
    new Bishop(Colors.BLACK, this.getCell(1, 0));
    new Bishop(Colors.BLACK, this.getCell(6, 0));
    new Bishop(Colors.WHITE, this.getCell(1, 7));
    new Bishop(Colors.WHITE, this.getCell(6, 7));
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

//   ! если захотим играть в другие игры с другим расположением фигур, то применим специальный для этой игры метод расположения фигур
//   public addFisherFigure(){
	
//   }

  public addFigures() {
    this.addBishop();
    this.addKings();
    this.addKnights();
    this.addPawns();
    this.addRooks();
    this.addQueens();
  }
}
