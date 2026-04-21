import { useState } from 'react';

export function Text_input() {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h2>Type something:</h2>

      <input type="text" value={text} onChange={handleChange} />

      <p>You typed: {text}</p>
    </div>
  );
}

export default Text_input;