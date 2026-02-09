import { useState } from "react";

export default function Counter2() {
  const [count2, setCount2] = useState(0);
  const handleAddition = () => {
    const newCount = count2 + 1;
    setCount2(newCount);
  };
  const handleSubtract = () => {
    setCount2(count2 - 1);
  };
  return (
    <div style={{border: "2px solid blue", padding:"15px"}}>
      <h3>Counter2: {count2}</h3>
      <button onClick={handleAddition}>Count+</button>
      <button onClick={handleSubtract}>Count-</button>
    </div>
  );
}
