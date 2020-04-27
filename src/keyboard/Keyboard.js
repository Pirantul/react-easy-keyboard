import React from "react";
import "./keyb.css";
import Row from "./Row";

const Keyboard = ({layout, style, onClickBtn}) => {
    
    let btnsRow = [];

    layout.forEach((row, i) => {
        btnsRow.push(row.split(' '));
    });
    
    return (
        <div id="keyb">
            {btnsRow.map((row, i) => {
                return <Row key={i} row={row} keyProp={style} onClickBtn={onClickBtn} />
            })}
            
        </div>
    );
}

export default Keyboard