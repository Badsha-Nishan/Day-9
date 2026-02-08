import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        border: "2px solid purple",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button style={{ marginRight: "10px" }} onClick={handleAdd}>
        Count++
      </button>
      <button onClick={handleReduce}>Count--</button>
    </div>
  );
}
