import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(100);
  const [name, setName] = useState(100);
  const [email, setEmail] = useState(100);
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button className="me-2" onClick={() => setCount(400)}></button>{" "}
        {/* changes the default value to 400 */}
        <button className="me-2" onClick={() => setCount((count) => count + 1)}>
          +
        </button>{" "}
        {/* adds one to the default value  */}
        <button onClick={() => setCount((count) => count - 1)}>-</button>{" "}
        {/* subtracts one from the default value  */}
      </div>
    </div>
  );
};

export default Counter;
