import "./Card.css"; 
import { Plus } from 'iconoir-react';

export function Card({ imgSrc, price, title, weight }) {
  return (
    <div className="card">
      <div className="card__img__wrapper">
        <img className="card__img" src={imgSrc} alt={title} />
      </div>
      <span className="card__price">{price}</span>
      <span className="card__title">{title}</span>
      <span className="card__weight">{weight}</span>
      <button className="button__add">
      <Plus className="icons" /> Добавить
      </button>
    </div>
  );
}
