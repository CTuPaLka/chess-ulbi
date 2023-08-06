import uuid from "react-uuid";
import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number; // для реакт ключей

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        color = color;
        figure = figure;
        board = board;
        this.available = false;
        this.id = uuid()
    }
}