import { useEffect, useLayoutEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

// Uncomment this and comment the following useEffect
/*
  useLayoutEffect(() => {
    if (count === 3) { 
      setCount(4);
    }
  }, [count]);
*/

  useEffect(() => {
    if (count === 3) { 
      setCount(4);
    }
  }, [count]);

  useEffect(() => {
    console.log('count changed');
  
    return () => console.log('cleanup count changed');
  }, [count]);

  useEffect(() => {
    console.log('mounted');
  
    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    console.log('pressed re-render');
  }, [bool]);

  useEffect(() => {
    console.log('mount');
  }, []);

  // Loop to show that 3 flickers momentarily when using useEffect to skip to 4
  const startTime = new Date();
  while (new Date() - startTime < 100) {}

  return (
    <>
      <div className="counter">
        <button onClick={() => setBool(!bool)}>Re-Render</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
      </div>
    </>
  );
}
