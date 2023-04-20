import React, { useState } from "react";
interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <div className="counter">
        <button className="btn btn-light" onClick={onDecrement}>
          -
        </button>
        <span>{count}</span>
        <button type="button" className="btn btn-light" onClick={onIncrement}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
