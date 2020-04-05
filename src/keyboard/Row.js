import React from "react";
import Key from "./Key";

const Row = (props) => {
    const row = props.row;
    
    return(
        <div className='keyb-row'>
            {row.map((btn) => {
                return <Key key={btn} btn={btn} keyProp={props.keyProp} onClickBtn={props.onClickBtn} />
            })}
        </div>
    )
}

export default Row