import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import BlackLogo from "../../assets/black-queen.png";
import WhiteLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
		this.name = FigureNames.BISHOP;
	 }
}