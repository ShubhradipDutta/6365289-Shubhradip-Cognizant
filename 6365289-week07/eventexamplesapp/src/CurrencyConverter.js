import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const result = (rupees / 90).toFixed(2); // Assume 1 Euro = 90 INR
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <h3>{rupees} INR = {euro} EUR</h3>}
    </div>
  );
}

export default CurrencyConverter;
