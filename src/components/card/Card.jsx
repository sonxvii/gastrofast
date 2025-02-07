import React, { useState } from "react";
import { Plus, Minus } from "iconoir-react";
import "./Card.css";

export function Card({ imgSrc, price, title, weight }) {
  const [count, setCount] = useState(0);
  // добавить
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1); 
  };
// убрать
  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="card">
      <div className="card__img__wrapper">
        <img className="card__img" src={imgSrc} alt={title} />
      </div>
      <span className="card__price">{price}</span>
      <span className="card__title">{title}</span>
      <span className="card__weight">{weight}</span>

      {count === 0 ? (
        <button className="button__add" onClick={() => setCount(1)}>
          <Plus className="icons" color="var(--main-Gray)" /> Добавить
        </button>
      ) : (
        // счетчик
        <div className="counter"> 
          <button className="counter__btn" onClick={handleDecrease}>
            <Minus className="icons" />
          </button>
          <span className="counter__value">{count}</span>
          <button className="counter__btn" onClick={handleIncrease}>
            <Plus className="icons" />
          </button>
        </div>
      )}
    </div>
  );
}