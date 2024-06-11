import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="Hero">
      <h1>Baisc Counter App using useState</h1>
      <h2>Simple Counter</h2>
      <MyButton />
      <h2>Increment and Decrement</h2>
      <Counter />
      <h2>Counter with Local Storage</h2>
      <LocalCounter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={Decrement} className="dec">
        -1
      </button>
      <label htmlFor="">{count}</label>
      <button onClick={Increment} className="inc">
        +1
      </button>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function HandleCLick() {
    setCount(count + 1);
  }

  return (
    <button className="counter" onClick={HandleCLick}>
      {" "}
      Clicked {count} times
    </button>
  );
}

function LocalCounter() {
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  function HandleClick() {
    setCount(count + 1);
  }

  return <button onClick={HandleClick} className="local">{count}</button>;
}
