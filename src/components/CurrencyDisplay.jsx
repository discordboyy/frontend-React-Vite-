import React from "react";

export default function CurrencyDisplay({ from, to, rate, time }) {
  return (
    <div className="currency-and-time">
      <div className="left-currency">1 {from}</div>
      <div className="time">{time}</div>
      <div className="right-currency">{rate ? rate.toFixed(4) : "-"} {to}</div>
    </div>
  );
}
