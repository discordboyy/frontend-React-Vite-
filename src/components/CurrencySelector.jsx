import React, { useState } from "react";  // Импортируем React и хук useState из библиотеки React

export default function CurrencySelector() {  // Определяем компонент CurrencySelector, который будет экспортироваться по умолчанию 
  const currencies = [  // Определяем массив доступных валютных кодов
    "EUR", "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", 
    "HKD", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", 
    "NOK", "NZD", "PHP", "PLN", "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR" 
  ];

  const [from, setFrom] = useState("USD");  // Создаем состояние для валюты отправления, начальное значение — "USD"
  const [to, setTo] = useState("NOK");  // Создаем состояние для валюты назначения, начальное значение — "NOK"

  return (  // Возвращаем JSX разметку компонента
    <div className="selector-build">  
      <select value={from} onChange={(e) => setFrom(e.target.value)}>  
        {currencies.map((code) => (  // Для каждого валютного кода из массива currencies
          <option key={code}>{code}</option>  // Создаем элемент <option> для каждой валюты с атрибутом key и значением валюты
        ))}
      </select>
      <div className="build">to</div>  
      <select value={to} onChange={(e) => setTo(e.target.value)}> 
        {currencies.map((code) => (  // Для каждого валютного кода из массива currencies
          <option key={code}>{code}</option>  // Создаем элемент <option> для каждой валюты с атрибутом key и значением валюты
        ))}
      </select>
    </div>
  );
}
