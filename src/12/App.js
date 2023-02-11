import { lazy, useCallback, useMemo, useState, Suspense } from 'react';
const MyButton = lazy(() => import('./MyButton'));

export default function App() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num);
  }, [num]);

  const onClickLog = useCallback(
    () => () => console.log(logValue), [logValue]);

  return (
    <>
      <h1>Fib {num} is {fibValue}</h1>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <br />
      <br />
      
      <input
        type="text"
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />
      
      { 
        logValue.length > 0 ? 
                            <Suspense fallback={<div>Loading...</div>}>
                              <MyButton onClick={onClickLog}>Log Value</MyButton>
                            </Suspense>
                            : null
      }
    </>
  );
}

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n-2) + fib(n-1);
}
