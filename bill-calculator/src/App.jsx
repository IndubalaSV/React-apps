import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);
  const [computedTip, setComputedTip] = useState(0);

  useEffect(() => {
    const totalTip = bill * ((tip + tip2) / 200);
    setComputedTip(totalTip);
  }, [bill, tip, tip2]);

  return (
    <div className="App">
      <h2>Bill calculator</h2>
      <div>
        <label>How much was the bill?</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="tip">How much did you like the service?</label>
        <select id="tip" onChange={(e) => setTip(parseFloat(e.target.value))}>
          <option value="0">dissatisfied(0%)</option>
          <option value="5">average(5%)</option>
          <option value="10">good(10%)</option>
          <option value="20">best(20%)</option>
        </select>
      </div>
      <div>
        <label htmlFor="tip2">How much your friends liked the service?</label>
        <select id="tip2" onChange={(e) => setTip2(parseFloat(e.target.value))}>
          <option value="0">dissatisfied(0%)</option>
          <option value="5">average(5%)</option>
          <option value="10">good(10%)</option>
          <option value="20">best(20%)</option>
        </select>
      </div>
      <p>
        Total bill: ${bill + computedTip} (${bill} + ${computedTip} tip)
      </p>
    </div>
  );
}

export default App;
