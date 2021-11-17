import { useState } from "react";
import "./CounterBy.css";

function CounterBy({ operationName, countByOperation }) {
  const [counterParam, setCounterParam] = useState(0);

  const countByHandler = () => {
    countByOperation(counterParam);
  };

  return (
    <div className="counterBy">
      <p>{operationName}</p>
      <input
        type="number"
        min="1"
        onChange={(event) => setCounterParam(event.target.value)}
      />
      <button onClick={countByHandler}>{operationName}</button>
    </div>
  );
}

export default CounterBy;
