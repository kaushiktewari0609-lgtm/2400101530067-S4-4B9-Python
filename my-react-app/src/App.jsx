import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  function name() {
    return "kt";
  }

  function sum(a, b) {
    return a + b;
  }

  function calc(a, b, op) {
    if (op == '+') {
      return "Sum is " + (a + b);
    } 
    else if (op == '-') {
      return "Diff is " + (a - b);
    } 
    
    
    else {
      return "Product is"+(a*b);
    }
  }
  function table(a)
  {
    return 
  }

  return (
    <div>
      <h2>Introduction</h2>
      <h1>------------</h1>
      <h1>My name is {name()}</h1>
      <h1>My age is {sum(10, 10)}</h1>
      <h1>My maths is {calc(10, 10, '+')}</h1>
    </div>
  );
}

export default App;




