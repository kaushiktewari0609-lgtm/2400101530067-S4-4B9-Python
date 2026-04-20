import { useState } from 'react'
export function Toggle(){
    
const [Data, setData] = useState("OFF");

function toggle(){
  if(Data=="ON"){
  setData("OFF")
  }
  else
  {
  setData("ON")
  }

}
    return(
          <div>
    <h1>Toggle</h1>
    <h3>{Data}</h3>
    <toggle></toggle>
    <button onClick={toggle}>Toggle</button>
    </div>
    );
}

export default Toggle