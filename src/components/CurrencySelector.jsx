import React from "react";

export default function CurrencySelector({ from, to, onChange, currencies }) {
  return (
    <div className="selector-build">
      <select value={from} onChange={(e) => onChange("from", e.target.value)}>
        {currencies.map((code) => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>
      <div className="build">to</div>
      <select value={to} onChange={(e) => onChange("to", e.target.value)}>
        {currencies.map((code) => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>
    </div>
  );
}
