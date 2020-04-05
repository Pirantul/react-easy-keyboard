import React from "react";
import "./keyb.css";
import Row from "./Row";

const Keyboard = (props) => {
        
    const layout = props.layout;
    let btnsRow = [];

    layout.forEach((row, i) => {
        btnsRow.push(row.split(' '));
    });
    
    return (
        <div id="keyb">
            {btnsRow.map((row, i) => {
                return <Row key={i} row={row} keyProp={props.style} onClickBtn={props.onClickBtn} />
            })}
            
        </div>
    );
}

export default Keyboard