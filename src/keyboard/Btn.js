import React from "react";

const Btn = (props) => {

    let arrKeyStyle = props.keyProp.key;
    let keyStyle = props.keyProp.keysStyle;
    let btn = {
            name: props.btn,
            value: props.btn
        };
  
    arrKeyStyle.map(val  => {
               
        if (val.name === props.btn) {
            keyStyle = {...keyStyle , ...val.style};
            btn = val
        } 
    })
        
    return (<>
                <div onClick={props.onClickBtn} btn={btn.value} className="keyb-btn" 
                  style={ keyStyle }>
                    {btn.name}
                </div>
            </>
    )}

export default Btn