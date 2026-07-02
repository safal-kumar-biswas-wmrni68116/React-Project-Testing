import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(10);

    // const increase = () => {
    //     setCount(count + 1);
    // }
    // const decrease = () => {
    //     setCount(count - 1);
    // }
    // const reset = () => {
    //     setCount(0);
    // }

  return (
    <>
      <div>
        <p>Count: {count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default Counter
