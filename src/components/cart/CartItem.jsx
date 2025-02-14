import { Plus, Minus } from "iconoir-react";
import './Cart.css';

export function CartItem({ imgSrc, price, title, weight }) {
    return (
     <div className="cart__item">
        <div className="cart__img__wrapper">
            <img className="cart__img" src={imgSrc} alt={title} />
        </div>

        <div className="cart__options__wrapper">
            <div className="cart__info__wrapper">
                <span className="cart__item__title">{title}</span>
                <span className="cart__price">{price}</span>
            </div>
            <span className="cart__weight">{weight}</span>
            {/* счетчик */}
            <div className="cart__counter">
                <button className="cart__counter__btn">
                    <Minus className="icons"/>
                </button>
                <span className="cart__counter__value">1</span>
                <button className="cart__counter__btn">
                    <Plus className="icons"/>
                </button>
            </div>
        </div>
    </div>
);
}

