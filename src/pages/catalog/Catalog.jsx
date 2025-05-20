import { useState } from "react";
import "../../assets/normalize.css";
import "../../assets/style.css";
import "../catalog/Catalog.css"
import { Header } from "../../components/header/Header";
import { Banner } from "../../components/banner/Banner";
import { Grid } from "../../components/grid/Grid";
import { Menu } from "../../components/menu/Menu";
import { Cart } from "../../components/cart/Cart";
import { Pagination } from "../../components/pagination/Pagination";
import { Modal } from "../../components/modal/Modal";
import { Footer } from "../../components/footer/Footer";
import { products } from "../../data";

export function Catalog() {
  const [modalProduct, setModalProduct] = useState(null);

  const openModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <>
      <Header />
      {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
      <div className="page__wrapper">
        <div className="banner__wrapper">
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </div>
        <div className="content__wrapper">
          <div className="menu__section">
            <Menu />
          </div>
            {/* menu clouds */}
          <section className="cloud-menu">
          <button className="category">Азиатское</button>
          <button className="category">Салаты</button>
          <button className="category">Завтраки</button>
          <button className="category">Восточное</button>
          <button className="category">Десерты</button>
          </section>
          <Grid products={products} onCardClick={openModal} />
          <div className="cart__section">
          <Cart />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
