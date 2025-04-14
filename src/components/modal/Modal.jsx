import './Modal.css';
import { Xmark, Plus, Minus } from 'iconoir-react';

export function Modal({ product, onClose }) {
  return (
    <div className='modal'>
      <div className="modal__wrapper">
        {/* gallery */}
        <div className='modal__gallery'>
          <img src={product.imgSrc} alt={product.title} className='modal__gallery__img' />
          <img src={product.imgSrcAlt} alt={product.title} className='modal__gallery__img' />
        </div>
        {/* info */}
        <div className='modal__content'>
          <div className='modal__title__wrapper'>
            <button className="close__modal" onClick={onClose}> {/* Close button now functional */}
              <Xmark className='icons' />
            </button>
            <h1 className='modal__title'>{product.title}</h1>
          </div>
          <div className='modal__info__wrapper'>
            <h2 className='modal__price'>{product.price}</h2>
            <h2 className='modal__weight'>{product.weight}</h2>
          </div>
          <div className="divider" />
          {/* macronutrient */}
          <section className='modal__section'>
            <h3 className='modal__section__subtitle'>В 100 граммах</h3>
            <dl className="modal__macros">
              <div className="macros">
                <dd>{product.kcal}</dd>
                <dt>Ккал</dt>
              </div>
              <div className="macros">
                <dd>{product.prots}</dd>
                <dt>Белки</dt>
              </div>
              <div className="macros">
                <dd>{product.fats}</dd>
                <dt>Жиры</dt>
              </div>
              <div className="macros">
                <dd>{product.carbs}</dd>
                <dt>Углеводы</dt>
              </div>
            </dl>
          </section>
          <div className="divider" />
          {/* description */}
          <section className='modal__section'>
            <h3 className='modal__section__subtitle'>Описание</h3>
            <p className='modal__section__text'>{product.description}</p>
          </section>
          <div className="divider" />
          {/* compound */}
          <section className='modal__section'>
            <h3 className='modal__section__subtitle'>Состав</h3>
            <p className='modal__section__text'>{product.compound}</p>
          </section>
          <div className="divider" />
          {/* conditions */}
          <section className='modal__section'>
            <h3 className='modal__section__subtitle'>Срок годности и условия хранения</h3>
            <p className='modal__section__text'>{product.conditions}</p>
          </section>
        </div>
      </div>
      <div className="modal__button__wrapper">
        <button className="modal__button__add">
          <Plus className="icons"/>
          Добавить
        </button>
        <button className="modal__counter">
          <Minus className="icons counter__btn"/>
          1
          <Plus className="icons counter__btn"/>
        </button>
      </div>
    </div>
  );
}
