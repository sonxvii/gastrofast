import { useState } from "react";
import { CartItem } from "../cart/CartItem";
import { ShoppingBagWarning } from "iconoir-react";
import { products } from "../../data";
import './Cart.css';

export function Cart() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="cart">
      <span className="cart__title">Корзина</span>
      {products.map((product) => (
        <CartItem
          key={product.id}
          imgSrc={product.imgSrc}
          price={product.price}
          title={product.title}
          weight={product.weight}
          handleIncrease={() => handleIncrease(product.id)}
          handleDecrease={() => handleDecrease(product.id)}
        />
      ))}
      <div className="divider" />
      <div className="order__warning">
        <ShoppingBagWarning />
        <span className="warning__text">Еще 100₽ до бесплатной доставки</span>
      </div>
      <button
        className="order__btn"
        style={{
          backgroundColor: isButtonClicked ? "var(--accent-Green)" : "", 
          color: isButtonClicked ? "white" : "",
          boxShadow: isButtonClicked ? "inset 0 0 0 1px var(--alpha-Silver-15)" : ""
        }}
        onClick={handleButtonClick}>
          Далее
        <span className="order__total">1000</span>
      </button>
    </div>
  );
}