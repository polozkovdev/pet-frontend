import React, {useState} from 'react';
import SM from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => setCount((prev) => prev + 1);
  return (
    <div className={SM.button}>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>increment</button>
    </div>
  );
};
