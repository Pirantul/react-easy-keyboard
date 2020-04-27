import React from "react";
import Btn from "./Btn";

const Row = ({row, keyProp, onClickBtn}) => {
    
    return(
        <div className='keyb-row'>
            {row.map((btn) => {
                return <Btn key={btn} btn={btn} keyProp={keyProp} onClickBtn={onClickBtn} />
            })}
        </div>
    )
}

export default Row