import React from "react";

const Key = (props) => {

    let arrKeyStyle = props.keyProp.key;
    let keyStyle = props.keyProp.keysStyle;
    let name = "";
    let value = "";
  
    arrKeyStyle.map((key, i)  => {
        if (key.name === props.btn) {
            keyStyle = {...keyStyle , ...key.style};
            name = key.name;
            value = key.value;
        } else {
            name = props.btn;
            value = props.btn;
        }
    })
        
    return (<>
                <div onClick={props.onClickBtn} value={value} className="keyb-btn" 
                  style={ keyStyle }>
                    {name}
                </div>
            </>
    )}

export default Key