import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

export default function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className="container" onClick={() => {
        console.log('Clicked on container');
      }}>
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? 'Show Modal' : 'Hide Modal'}
        </button>
        {isHidden || < Modal />}
      </div>

      <p className="other">
        Other Content
      </p>
    </>
  );
}

function Modal() {
  return createPortal(
    <p className="modal">Modal</p>,
    document.getElementById('modal-root')
  );
}
