import { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Counter' : 'Show Counter'}
      </button>
      <br />
      <br />
      {isShown ? <Counter /> : null}
    </>
  );
}
