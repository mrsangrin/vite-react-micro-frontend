import styled from "@emotion/styled";
import { useState } from "react";
import "./Counter.css";


const BtnDiminish = styled.button`
  color: orange;
  background-color: black;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

const Counter = () => {
    const [counter, setCounter] = useState(5);
    
    const handleAdd = () => {
      setCounter(counter + 1);
    };

    const handleDiminish = () => {
      setCounter(counter - 1);
    };
    
    return (
      <>
        <h1 className="title"> Counter: {counter}</h1>
        <button 
          style={{
            padding: "10px",
            color: "lightgreen",
            fontSize: "2rem"
          }}
          onClick={handleAdd}>Add</button>
          <BtnDiminish 
            className="button"
            onClick={handleDiminish}>Diminish</BtnDiminish>
      </>
    );
};

export default Counter;