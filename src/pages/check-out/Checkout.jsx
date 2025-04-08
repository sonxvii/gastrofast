import "../../assets/normalize.css";
import "../../assets/style.css";
import "./Checkout.css";
// import { Card } from "../card/Card";
// import { products } from "../../data";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Cutlery, Minus, NavArrowRight, Plus, Position } from "iconoir-react";
export function Checkout() {
    return (
        <>
            <Header />
            <section className="checkout">
                {/* =====Cart===== */}
                <section className="checkout__cart">
                    <h1 className="head">Корзина</h1>
                    <div className="cart__wrapper">
                        <div className="cart__item">
                            <div className="item__img"></div>
                            <div className="item__wrapper">
                                <div className="item__info">
                                    <span className="item__title">Круассан плоский c молочным шоколадом и орехами в карамели </span>
                                    <span className="item__weight">100</span>
                                </div>
                                <div className="counter__wrapper">
                                    <div className="cart__counter">
                                        <button className="cart__counter__btn">
                                            <Minus className="icons" />
                                        </button>
                                        <span className="cart__counter__value">1</span>
                                        <button className="cart__counter__btn">
                                            <Plus className="icons" />
                                        </button>
                                    </div>
                                    <span className="item__price">200</span>
                                </div>
                            </div>
                        </div>
                        <button className="add-cutlery">
                            <Cutlery className="icons" />
                            Добавить приборы
                        </button>
                    </div>
                </section>

                {/* =====Summary===== */}
                <section className="checkout__sum">
                    <h1 className="head">Итого</h1>
                    <div className="sum__wrapper">
                        {/* -----info----- */}
                        <div className="info__wrapper">
                            <div className="calc__wrapper">
                                <div className="sum__items subhead">
                                    Товары
                                    <span className="items__cost subhead">1000</span>
                                </div>
                                <div className="sum__items subhead">
                                    Доставка
                                    <span className="items__cost subhead">150</span>
                                </div>
                                <div className="sum__items sale subhead">
                                    Скидка
                                    <span className="items__cost sale subhead">100</span>
                                </div>

                                <div className="divider"></div>

                                <div className="sum__total subhead">
                                    К оплате
                                    <span className="total__cost head">1050</span>
                                </div>
                            </div>
                            <button className="sum__btn">
                                Перейти к оплате
                                <NavArrowRight className="icons" />
                            </button>
                        </div>

                        {/* =====Map==== */}
                        <div className="sum__map">
                            <div className="map__params">
                                <button className="map__btn" alt="location">
                                    <Position className="icons" />
                                </button>
                                <div className="map__zoom">
                                    <button className="map__btn" alt="plus">
                                        <Plus className="icons" />
                                    </button>
                                    <button className="map__btn" alt="minus">
                                        <Minus className="icons" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* =====Try more===== */}
            <section className="checkout__try-more">
                <h1 className="head">Попробуйте сегодня</h1>
                <div className="try-more__catalog">
                    {/* {products.map((product) => (
                        <Card
                            key={product.id}
                            imgSrc={product.imgSrc}
                            price={product.price}
                            title={product.title}
                            weight={product.weight}
                        />
                    ))} */}
                </div>
            </section>
            <Footer />
        </>
    );
}