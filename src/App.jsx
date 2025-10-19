import React from "react";
import CurrencySelector from "./components/CurrencySelector.jsx";
import CurrencyDisplay from "./components/CurrencyDisplay.jsx";
import background from "./assets/Gradient-halo-2.png";
import logo from "./assets/Makki logo svg (3).svg";
import backArrow from "./assets/Vector-back.svg";
import smalllogo from "./assets/Makki logo svg (2).svg";
import checkmark from "./assets/Vector (3).svg";

export default function App() {
  return (
    <>
      <div
        id="main-block"
        className="main-block"
        style={{
          background: `url(${background}) center`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="main-container">
          <div className="frame-17">
            <div className="upper-block">
              <div className="id-and-build">
                <div className="id">ID: ML4523</div>
                <CurrencySelector />
              </div>

              <div className="information-block">
                <a
                  href="https://www.tradingview.com/"
                  className="tradingview-info"
                >
                  <div className="icon">
                    <img
                      className="img-position"
                      src={checkmark}
                      alt=""
                    />
                  </div>
                  <div className="about-tradingview">
                    <div className="tradingview-text">
                      You can check it yourself on
                    </div>
                    <div className="tradingview-link">TradingView</div>
                  </div>
                </a>
                <div className="about-api">
                  <div className="text-api">Information taken from</div>
                  <a
                    href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
                    className="name-api"
                  >
                    European Central Bank
                  </a>
                </div>
              </div>
            </div>

            <CurrencyDisplay />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-block">
          <div className="footer-upper">
            <div className="frame-77">
              <div className="frame-76">
                <div className="makki-logo-svg">
                  <img src={smalllogo} alt="Makki" />
                </div>
                <div className="it-s-a-brand-with-space-for-art-and-financial-investments">
                  it&apos;s a brand, with space for art and financial investments:
                </div>
              </div>
              <a href="mailto:makki@gmail.com" className="makki-gmail-com">
                makki@gmail.com
              </a>
            </div>
            <hr />
            <div className="links-yable">
              <div className="social-links">
                <div className="title-social">Social</div>
                <div className="frame-85">
                  <a href="#" className="link-social">Linkedin</a>
                  <a href="https://www.instagram.com/mertygraal/" className="link-social">Instagram</a>
                  <a href="#" className="link-social">Facebook</a>
                  <a href="#" className="link-social">Twitter</a>
                  <a href="#" className="link-social">Behance</a>
                  <a href="#" className="link-social">Discord</a>
                  <a href="#" className="link-social">YouTube</a>
                </div>
              </div>
              <div className="company-links">
                <div className="title-company">Company</div>
                <div className="text-company">
                  Work<br />Expertise<br />Community<br />Discover<br />Contact
                </div>
              </div>
              <div className="office-links">
                <div className="title-office">Offices</div>
                <div className="text-office">No offices available right now</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="logo-holder">
              <img src={logo} alt="Makki Logo" />
            </div>
            <div className="footer-right-side">
              <div className="footer-buttons">
                <a href="#main-block" className="back-up">Back to top</a>
                <img className="vector-back" src={backArrow} alt="arrow" />
              </div>
              <div className="copyright">Copyright © Makki 2025</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
