import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spinWheel = () => {
    if (spinning) {
      return;
    }

    setSpinning(true);

    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? 'Try Again' : 'Gift Card';
      setResult(randomResult);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        <div className="inner-wheel">
          <p>{result}</p>
        </div>
      </div>
      <button onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default App;