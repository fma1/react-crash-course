import React, {useState} from 'react';

export default function TipCalculator() {
  // Write your code here.
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [numPeople, setNumPeople] = useState(1);

  const totalTip = bill * (tipPercent / 100);
  const tipPerPerson = totalTip / numPeople;

  return (
    <>
      <form>
        <label htmlFor="bill">Bill</label>
        <input
          id="bill"
          type="number" 
          value={bill}
          min="0"
          onChange={(event) => setBill(parseInt(event.target.value))} />
        <label htmlFor="tipPercentage">Tip Percentage</label>
        <input 
          id="tipPercentage"
          type="number" 
          value={tipPercent}
          min="0"
          onChange={(event) => setTipPercent(parseInt(event.target.value))} />
        <label htmlFor="numberOfPeople">Number of People</label>
        <input 
          id="numberOfPeople"
          type="number" 
          value={numPeople}
          min="1"
          onChange={(event) => setNumPeople(parseInt(event.target.value))} />
      </form>
      
      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(tipPerPerson) ? '-' : `$${tipPerPerson.toFixed(2)}`}</p>
    </>
  );
}
