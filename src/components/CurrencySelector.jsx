import React from "react";

export default function CurrencySelector({ fromCurrency, toCurrency, onChangeFrom, onChangeTo }) {
  const currencies = [
    "EUR", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP",
    "HKD", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR",
    "NOK", "NZD", "PHP", "PLN", "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"
  ];

  return (
    <div className="selector-build">
      <select value={fromCurrency} onChange={(e) => onChangeFrom(e.target.value)}>
        {currencies.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </select>
      <div className="build">to</div>
      <select value={toCurrency} onChange={(e) => onChangeTo(e.target.value)}>
        {currencies.map((code) => (
          <option key={code}>{code}</option>
        ))}
      </select>
    </div>
  );
}
