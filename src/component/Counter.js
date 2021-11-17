import React, { useReducer } from "react";
import "./Counter.css";
import CounterBy from "./CounterBy";
import { counterReducer, initialValue } from "./reducers/CounterReducer";

const Counter = () => {
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    initialValue
  );

  const incrementHandler = () => {
    dispatchCounter({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatchCounter({ type: "DECREMENT" });
  };

  const resetHandler = () => {
    dispatchCounter({ type: "RESET" });
  };

  const increaseByHandler = (increaseParam) => {
    dispatchCounter({
      type: "INCREASE_BY",
      param: parseInt(increaseParam),
    });
  };

  const decreaseByHandler = (decreaseParam) => {
    dispatchCounter({
      type: "DECREASE_BY",
      param: parseInt(decreaseParam),
    });
  };

  return (
    <div>
      <h2>{`Counter value: ${counterState.value}`}</h2>
      <button className="counter-btn" onClick={incrementHandler}>
        Increment
      </button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
      <CounterBy
        operationName="Increase By"
        countByOperation={increaseByHandler}
      />
      <CounterBy
        operationName="Decrease By"
        countByOperation={decreaseByHandler}
      />
    </div>
  );
};

export default Counter;
