import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setExpression('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(eval(expression).toString()); // Use eval for simplicity; be cautious in production
      setExpression('');
    } catch (error) {
      setInput('Error');
      setExpression('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <span className="small-input">{expression}</span>
        <span className="large-input">{input || '0'}</span>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('±')} className="operator">±</button>
        <button onClick={() => handleClick('%')} className="operator">%</button>
        <button onClick={() => handleClick('/')} className="operator">÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="operator">×</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="operator">−</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>

        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual} className="equal">=</button>
        <button onClick={handleDelete} className="del">DEL</button>
      </div>
    </div>
  );
};

export default Calculator;
