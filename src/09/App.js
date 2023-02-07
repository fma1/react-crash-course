import { useRef } from 'react';
import Counter from './Counter';
import CustomInput from './CustomInput';

export default function App() {
  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <>
      <Counter ref={counterRef}/>
      <CustomInput ref={customInputRef} placeholder="Type something..." />  
      <br />
      <br />
      <button onClick={() => {
        counterRef.current.reset();
        customInputRef.current.reset();
      }}>
        Reset
      </button>
    </>
  );
}

