import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board{
    // ячейки представляют собой двумерный массив строк и столбцов. По сути матрица
    cells: Cell[][] = []

    public initCells(){
        for(let i =0; i<8; i++){
            const row: Cell[]=[]
            for(let j=0; j<8; j++){
                // если остаток от деления суммы i + j на 2 не равен нулю, то один цвет. Иначе другой
                if((i+j)%2 !==0){
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) // черный
                } else{
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // белый
                }
                this.cells.push(row)
            }
        }
    }
}