import { useState } from "react";
import styled from "@emotion/styled";
import { handleClick } from "../helpers/buttonsEventHandlers";

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
    

    return (
      <>
        <h1 className="title"> Counter: {counter}</h1>
        <button 
          style={{
            padding: "10px",
            color: "lightgreen",
            fontSize: "2rem"
          }}
          onClick={ 
            () => {
              setCounter(handleClick(counter, 1))
            }
          }>Add</button>
          
          <BtnDiminish 
            className="button"
            onClick={ 
              () => {
                setCounter(handleClick(counter, -1)) 
              }
            }>Diminish</BtnDiminish>
      </>
    );
};

export default Counter;