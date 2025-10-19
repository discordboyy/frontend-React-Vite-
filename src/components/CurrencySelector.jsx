import React, { useState } from "react";

export default function CurrencySelector() {
  const currencies = [
    "EUR", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP",
    "HKD", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR",
    "NOK", "NZD", "PHP", "PLN", "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"
  ];

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NOK");

  return (
    <div className="selector-build">
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </select>
      <div className="build">to</div>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </select>
    </div>
  );
}
