import { useState } from 'react';

export function Counter_application() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter_application