import React from 'react';
import "./Calculator.css";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../app/store";
import {addNumber, operation, deleteNumber, getResult, clearMemory} from "./CalculatorSlice";

const Calculator = () => {
  const calculation = useSelector((state: RootState) => state.calculator.calculation);
  const result = useSelector((state: RootState) => state.calculator.result);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="calculator">
        <div className="screen">
          <div className="equation">{calculation}</div>
          <div className="result">{result}</div>
        </div>
        <div className="key highlight" onClick={() => dispatch(clearMemory())}>AC</div>
        <div className="key highlight">±</div>
        <div className="key highlight">%</div>
        <div className="key highlight" onClick={() => dispatch(operation("/"))}>/</div>
        <div className="key" onClick={() => dispatch(addNumber("7"))}>7</div>
        <div className="key" onClick={() => dispatch(addNumber("8"))}>8</div>
        <div className="key" onClick={() => dispatch(addNumber("9"))}>9</div>
        <div className="key highlight" onClick={() => dispatch(operation("*"))}>*</div>
        <div className="key" onClick={() => dispatch(addNumber("4"))}>4</div>
        <div className="key" onClick={() => dispatch(addNumber("5"))}>5</div>
        <div className="key" onClick={() => dispatch(addNumber("6"))}>6</div>
        <div className="key highlight" onClick={() => dispatch(operation("-"))}>-</div>
        <div className="key" onClick={() => dispatch(addNumber("1"))}>1</div>
        <div className="key" onClick={() => dispatch(addNumber("2"))}>2</div>
        <div className="key" onClick={() => dispatch(addNumber("3"))}>3</div>
        <div className="key highlight" onClick={() => dispatch(operation("+"))}>+</div>
        <div className="key"  onClick={() => dispatch(addNumber("."))}>.</div>
        <div className="key" onClick={() => dispatch(addNumber("0"))}>0</div>
        <div className="key" onClick={() => dispatch(deleteNumber())}>&#9003;</div>
        <div className="key highlight" onClick={() => dispatch(getResult())}>=</div>
      </div>
    </div>
  );
};

export default Calculator;