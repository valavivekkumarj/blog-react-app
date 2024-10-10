import React, { useState, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // This ref won't cause re-render

  const incrementCount = () => {
    //setCount(count + 1); // Causes re-render  when you un comment this its re render ui.
    countRef.current = countRef.current + 1; // Doesn't cause re-render
    console.log('CountRef Value:', countRef.current); // Updated after each click
  };

  return (
    <div>
      <h2>Rendered Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <p>Count Ref Value (check console): {countRef.current}</p>
    </div>
  );
}

export default Timer;
