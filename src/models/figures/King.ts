import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import BlackLogo from "../../assets/black-king.png";
import WhiteLogo from "../../assets/white-king.png";

export class King extends Figure{
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
		this.name = FigureNames.BISHOP;
	 }
}