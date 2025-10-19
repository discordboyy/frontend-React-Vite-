import React from "react";  // Импортируем React, чтобы использовать JSX в компоненте
import leftLine from "../assets/left-line.svg";  // Импортируем изображение для левой линии
import rightLine from "../assets/right-line.svg";  // Импортируем изображение для правой линии
import vectorCurrency from "../assets/Vector-currency.svg";  // Импортируем изображение для иконки валюты (векторная иконка)
import dot from "../assets/Vector (4).svg";  // Импортируем изображение точки, которая будет отображаться рядом с линиями

export default function CurrencyDisplay() {  // Создаем компонент CurrencyDisplay, который будет экспортироваться по умолчанию
  return (
    <div className="under-block">  // Основной контейнер с классом "under-block", скорее всего, для стилизации блока
      <div className="container-valuta">  // Контейнер для всей валютной информации
        <div className="left-side-of-container">  // Контейнер для левой части (валюта отправления)
          <div className="left-valuta">USD</div>  // Отображение валюты отправления (USD)
          <div className="left-line-and-point">  // Контейнер для линии и точки
            <div className="left-icon">  // Контейнер для иконки точки
              <img className="img-position-2" src={dot} alt="" />  // Отображаем точку с использованием импорта
            </div>
            <img className="left-line" src={leftLine} alt="left line" />  // Отображаем изображение левой линии
          </div>
        </div>

        <img className="mid-of-container" src={vectorCurrency} alt="currency" />  // Отображаем иконку валюты между двумя сторонами, скорее всего, в качестве разделителя
          
        <div className="right-side-of-container">  // Контейнер для правой части (валюта назначения)
          <div className="right-line-and-point">  // Контейнер для правой линии и точки
            <img className="right-line" src={rightLine} alt="right line" />  // Отображаем изображение правой линии
            <div className="right-icon">  // Контейнер для правой иконки точки
              <img className="img-position-2" src={dot} alt="" />  // Отображаем точку для правой стороны
            </div>
          </div>
          <div className="right-valuta">NOK</div>  // Отображение валюты назначения (NOK)
        </div>
      </div>

      <div className="currency-and-time">  // Контейнер для отображения обменного курса и времени
        <div className="left-currency">1.</div>  // Отображение "1." — это, вероятно, курс валюты (например, 1 USD)
        <div className="time">17. oktober kl. 23:00:00 GMT+2</div>  // Отображаем точное время, когда был обновлен курс (17 октября в 23:00 по времени GMT+2)
        <div className="right-currency">10,0339.</div>  // Отображение курса валюты назначения (например, 10,0339 NOK за 1 USD)
      </div>
    </div>
  );
}
