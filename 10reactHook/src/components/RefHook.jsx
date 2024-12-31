import { useState,useRef } from "react";

const RefHook = () => {
  const [myNum, setMyNum] = useState(0);

  const getNumBox = () => {
    console.log("Form num box");
    console.log(inputOne.current);
    inputOne.current.style.width="400px"

  };
  const getTextBox = () => {
    console.log("Form text box");
    console.log(inputTwo.current);
    inputTwo.current.style.backgroundColor="green"
  };

  const inputOne = useRef()
  const inputTwo = useRef()

  return (
    <div>
      <h2>1. useRef</h2>
      <input
        value={myNum}
        type="number"
        style={{width:'100px',backgroundColor:'blue'}}
        ref={inputOne}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <br />
      <input
        value={myNum}
        ref={inputTwo}
        style={{width:'100px',backgroundColor:'red'}}
        type="text"
        onChange={(e) => setMyNum(e.target.value)}
      />
      <br />
      <h3>Value is {myNum}</h3>
      <br />
      <button onClick={getNumBox} type="button">
        One
      </button>
      <br />
      <br />
      <button onClick={getTextBox} type="button">
        Two
      </button>
      <br />
    </div>
  );
};

export default RefHook;
