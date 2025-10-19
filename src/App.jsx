import { useState, useEffect } from "react";
import { fetchRate } from "./api";
import "./styles/style.css";

export default function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NOK");
  const [rate, setRate] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    async function loadRate() {
      try {
        const data = await fetchRate(from, to);
        setRate(data.rate);
        setDate(data.date);
      } catch (error) {
        console.error("Error fetching rate:", error);
      }
    }
    loadRate();
  }, [from, to]);

  return (
    <div className="main-block">
      <div className="main-container">
        <div className="selector-build">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="build">to</div>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="under-block">
          <div className="container-valuta">
            <div className="left-valuta">{from}</div>
            <div className="right-valuta">{to}</div>
          </div>
          <div className="currency-and-time">
            <div className="left-currency">1 {from}</div>
            <div className="time">{date}</div>
            <div className="right-currency">{rate ? rate.toFixed(4) : "..."}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const currencies = [
  "EUR","USD","GBP","NOK","SEK","CHF","CAD","AUD","JPY","PLN","CZK","DKK","HUF"
];
