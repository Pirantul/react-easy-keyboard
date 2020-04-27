import React from "react";

const Btn = ({btn, keyProp, onClickBtn}) => {

    let arrKeyStyle = keyProp.key;
    let keyStyle = keyProp.keysStyle;
    let button = {
            name: btn,
            value: btn
        };
  
    arrKeyStyle.map(val  => {
               
        if (val.name === btn) {
            keyStyle = {...keyStyle , ...val.style};
            button.value = val.value;
        } 
    })
        
    return (<>
                <div onClick={onClickBtn} btn={button.value} className="keyb-btn" 
                  style={ keyStyle }>
                    {button.name}
                </div>
            </>
    )}

export default Btn