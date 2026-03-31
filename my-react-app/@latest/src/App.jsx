import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  function abc() {
    alert("function called")
  }

  function apple() {
    alert("you have clicked on apple button")
  }

  function banana() {
    alert("you have clicked on banana button")
  }

  return (
    <div>
      <button onClick={abc}>Click ABC</button>
      <button onClick={apple}>Click Apple</button>
      <button onClick={banana}>Click Banana</button>
    </div>
  )
}

export default App
