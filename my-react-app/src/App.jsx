import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <User />
      <h1>Kaushik</h1>
    </>
  );
}

export default App;

function User() {
  return (
    <h1>My name is</h1>
  );
}