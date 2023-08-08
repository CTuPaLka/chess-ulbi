import React, {useState, useEffect} from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
	
	function clickOnCell(cell: Cell){
		cell.figure && setSelectedCell(cell)
	}

	useEffect(()=>{
		highLightCells()
	}, [selectedCell])

	function highLightCells(){
		board.highLightCells(selectedCell)
		updateBoard()
	}

	function updateBoard(){
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<div className="board">
			{board.cells.map((row, index) =>
				<React.Fragment key={index}>
					{row.map(cell =>
						<CellComponent 
						clickOnCell={clickOnCell}
						cell={cell}
						key={cell.id}
						selected={cell.x === selectedCell?.x && cell.y===selectedCell?.y}
						/>
					)}
				</React.Fragment>
			)}
		</div>
	);
}

export default BoardComponent;
