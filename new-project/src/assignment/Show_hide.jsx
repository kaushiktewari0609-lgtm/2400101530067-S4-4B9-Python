import { useState } from 'react';

export function Show_hide() {

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={toggle}>Click me</button>

      {show && <p>Hello, this is the text!</p>}
    </div>
  );
}

export default Show_hide;