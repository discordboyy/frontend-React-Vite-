import React from "react";
import leftLine from "../assets/left-line.svg";
import rightLine from "../assets/right-line.svg";
import vectorCurrency from "../assets/Vector-currency.svg";
import dot from "../assets/Vector (4).svg";

export default function CurrencyDisplay({ fromCurrency, toCurrency, rate, timestamp }) {
  return (
    <div className="under-block">
      <div className="container-valuta">
        <div className="left-side-of-container">
          <div className="left-valuta">{fromCurrency}</div>
          <div className="left-line-and-point">
            <div className="left-icon">
              <img className="img-position-2" src={dot} alt="" />
            </div>
            <img className="left-line" src={leftLine} alt="left line" />
          </div>
        </div>

        <img className="mid-of-container" src={vectorCurrency} alt="currency" />

        <div className="right-side-of-container">
          <div className="right-line-and-point">
            <img className="right-line" src={rightLine} alt="right line" />
            <div className="right-icon">
              <img className="img-position-2" src={dot} alt="" />
            </div>
          </div>
          <div className="right-valuta">{toCurrency}</div>
        </div>
      </div>

      <div className="currency-and-time">
        <div className="left-currency">1.00</div>
        <div className="time">{timestamp || "Loading..."}</div>
        <div className="right-currency">
          {rate ? rate.toFixed(4) : "—"}
        </div>
      </div>
    </div>
  );
}
