import { Plus, Minus } from "iconoir-react";
import './Cart.css';

export function Cart() {
  return (
    <div className="cart">
      <div className="cart__item">
        <div className="cart__img__wrapper">
          <div className="cart__img"></div>
        </div>
        
        <div className="cart__options__wrapper">
          <div className="cart__info__wrapper">
            <span className="cart__title">Title</span>
            <span className="cart__price">Цена</span>
          </div>
          <span className="cart__weight">200</span>
          {/* счетчик */}
          <button className="cart__counter">
            <Minus className="icons" color="var(--main-Gray)" />
            Добавить
            <Plus className="icons" color="var(--main-Gray)" />
          </button>
        </div>

      </div>
    </div>
  );
}