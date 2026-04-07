import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  let data="demo"
  function update()
  {
    data="Example"
    alert(data);
  }
  return(
    <>
    <h1>{data}</h1>
    <button onClick={update}>testing</button>
    </>
  )
/*function abc()
{
  alert("function called")
}
  const fruit=()=>
  {
    alert("arrow function")
  }
  const apple=(name)=>
  {
    alert(name)
  }
  return (
    <>
    <h1>example of arrow function</h1>
    <button onClick={()=>fruit()}>arrow function</button><br/>
    <button onClick={abc}>click</button><br/>
    <button onClick={()=>apple("click on apple")}>apple</button><br/>
    <button onClick={()=>apple("click on banana")}>banana</button><br/>
    </>
  )*/
}


export default App