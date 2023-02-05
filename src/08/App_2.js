import { forwardRef, useRef, useState } from 'react';

const MyInput = forwardRef(function (props, ref) {
  return <input {...props} style={{color: 'red'}} ref={ref} />
});

export default function App() {
  const inputRef = useRef(null);
  console.log(inputRef);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
