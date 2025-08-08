import React, { useState } from "react";

function EventsDemo() {
  const [count, setCount] = useState(0);

  // Increment Function
  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };

  const incrementCount = () => setCount(count + 1);
  const sayHello = () => console.log("Hello! Count is increased");

  // Decrement Function
  const handleDecrement = () => setCount(count - 1);

  // Welcome Function
  const sayWelcome = (msg) => alert(msg);

  // Synthetic Event Handler
  const handleClick = () => alert("I was clicked");

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h2>Say Welcome Example</h2>
      <button onClick={() => sayWelcome("Welcome to the event!")}>
        Say Welcome
      </button>

      <h2>Synthetic Event Example</h2>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default EventsDemo;
