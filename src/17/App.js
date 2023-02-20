import { useDebugValue, useState, Profiler } from 'react';

let renderCount = 0;

export default function App() {
  renderCount++;
  console.log('rendering');

  return (
    <Profiler id="App" onRender={() => console.log('commit')}>
      <Counter initialValue={5} />
      <Counter />
      <p>Render Count: {renderCount}</p>
    </Profiler>
  );
}

function Counter({initialValue = 0}) {
  const [ count, setCount ] = useMyState(initialValue);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

function useMyState(initialValue = 0) {
  useDebugValue('hello world');
  return useState(initialValue);
}
