/* eslint-disable no-unused-expressions */
import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function Counter (props, ref) {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset: () => setCount(0)
  }));

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
});

