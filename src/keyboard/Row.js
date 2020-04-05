import React from "react";
import Btn from "./Btn";

const Row = (props) => {
    const row = props.row;
    
    return(
        <div className='keyb-row'>
            {row.map((btn) => {
                return <Btn key={btn} btn={btn} keyProp={props.keyProp} onClickBtn={props.onClickBtn} />
            })}
        </div>
    )
}

export default Row