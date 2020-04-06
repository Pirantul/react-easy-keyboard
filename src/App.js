import React, { useState } from 'react';
import Keyboard from "./keyboard/Keyboard";
import "./style.css";

function App() {

  const [pass, setPass] = useState("");
  const [figs, setFigs] = useState("");
  const [caps, setCaps] = useState(false);
  const [lay, setLay] = useState(1);
  
  const onClickBtn = e => {
    let symbol = e.target.getAttribute("btn");
    let word = pass;
    
    if (symbol === 'abc') {
      if (lay === 2) { 
        setLay(0); 
        return;
      }
      setLay(lay+1);
      return;
    }

    if (symbol === 'CAPS') {
      setCaps(!caps);
      symbol = "";
    }

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
/* Replace the layout with "layoutFig" in Keyboard-component for displaying the numeric keypad */
const layoutFig = ["1 2 3", "4 5 6", "7 8 9", "abc 0 <"];
const layoutEng = ["A B C D E F", "G H I J K L M", "N O P Q R S", "T U V W X Y Z", "CAPS 123 SPACE <"];
const layoutRus = ["А Б В Г Д Е Ё Ж", "З И Й К Л М Н О", "П Р С Т У Ф Х Ц", "Ч Ш Щ Ъ Ы Ь Э Ю", "CAPS 123 Я ПРОБЕЛ <"];

const keybStyle = {
  keysStyle:{
        fontSize: lay===0?"50px":"30px",
        lineHeight: lay===0?"120px":"100px",
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
      name: "ПРОБЕЛ",
      value: " ",
      style: {
        minWidth: "100px",
        fontSize: "26px",
         }
      },
    {
      name: "CAPS",
      value: "CAPS", //reserved value!
      style: {
        minWidth: "75px",
        maxWidth: "110px",
        background: caps?"brown":""
      }
    },
    {
      name: "<",
      value: "<",
      style: {
        minWidth: "40px",
      }
    },
    {
      name: lay===0?"abc":"123",
      value: "abc",
      style: {
        minWidth: "65px",
      }
    },
    {
      name: "Я",
      value: "Я",
      style: {
        maxWidth: "100px"
      }
    }
  ]
}

  return (
    <div className="App">
      <div className="keyboard">
        <div className="field">{figs}</div>
        <Keyboard layout={lay===0?layoutFig:lay===1?layoutEng:layoutRus} style={keybStyle} onClickBtn={onClickBtn} />
      </div>
    </div>
    
  );
}

export default App;
