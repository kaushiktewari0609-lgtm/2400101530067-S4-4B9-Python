import { useState } from 'react';
export function Character_counter(){
    
const [text, setText] = useState("");

function handleChange(e) {
  setText(e.target.value);}
    return(
          <>
    <h1>Character Counter</h1>
    <input 
  type="text" 
  value={text} 
  onChange={handleChange} 
  placeholder="Type something..." 
/>
    <p>Characters typed:{text.length}</p>

    </>
    );
}

export default Character_counter