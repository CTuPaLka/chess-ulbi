import React from "react";
import { Cell } from "../models/Cell";

interface CellProps{
	cell: Cell
	selected: boolean;
	clickOnCell: (cell: Cell)=>void
}

const CellComponent: React.FC<CellProps>=({cell, selected, clickOnCell})=> {
  return <div 
  className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
  onClick={()=>clickOnCell(cell)}
  style={{background: cell.available && cell.figure ? 'green' : ''}}
  >

	{cell.available && !cell.figure && <div className={'avaible'}/>}
	{cell.figure?.logo && <img src={cell.figure.logo} alt=""
	
	/>}
  </div>;
}

export default CellComponent;
