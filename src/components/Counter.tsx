import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../states/counter";

const Counter: React.FC = () => {
  const counter = useSelector<any>((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count:{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  );
};

export default Counter;
