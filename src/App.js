import React, { useState } from 'react';
import Keyboard from "./keyboard/Keyboard";
import "./style.css";

function App() {

  const [pass, setPass] = useState("");
  const [figs, setFigs] = useState("");
  const [caps, setCaps] = useState(false);
  
  const onClickBtn = e => {
    let symbol = e.target.getAttribute("value");
    let word = pass;
    
    if (symbol === 'CAPS') {
      setCaps(!caps);
      symbol = "";
    };
    if (symbol === '<') {
        word = word.substring(0, word.length - 1);
    } else {
      if (caps) {
        word += symbol.toUpperCase();
      } else {
        word += symbol.toLowerCase();
      }
    };
    setPass(word);
    setFigs(word);
    
}

const layoutFig = ["1 2 3", "4 5 6", "7 8 9", ". 0 <"];
const layoutRus = ["А Б В Г Д Е Ё Ж", "З И Й К Л М Н", "О П Р С Т У Ф Х", "Ц Ч Ш Щ Ъ Ы Ь", "CAPS Э Ю Я ПРОБЕЛ <"];
const layoutEng = ["A B C D E F", "G H I J K L M", "N O P Q R S", "T U V W X Y Z", "CAPS SPACE <"];

const keybStyle = {
  keysStyle:{
        fontSize: "30px",
        lineHeight: "100px",
        height: "90%"
  },
  key: [
    {
    name: "SPACE",
    value: " ",
    style: {
      minWidth: "150px",
       }
    },
    {
      name: "CAPS",
      value: "CAPS", //reserved value!
      style: {
        minWidth: "100px",
        width: "120px",
        background: caps?"brown":""
      }
    },
    {
      name: "<",
      value: "<",
      style: {
        minWidth: "100px",
        width: "120px",

      }
    }
  ]
}

  return (
    <div className="App">
      <div className="keyboard">
        <div className="field">{figs}</div>
        <Keyboard layout={layoutEng} style={keybStyle} onClickBtn={onClickBtn} />
      </div>
    </div>
    
  );
}

export default App;
