import "../../assets/normalize.css";
import "../../assets/style.css";
import { Header } from "../../components/header/Header";
import { Banner } from "../../components/banner/Banner";
import { Grid } from "../../components/grid/Grid";
import { Menu } from "../../components/menu/Menu";
import { Cart } from "../../components/cart/Cart";
import { Pagination } from "../../components/pagination/Pagination";
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Modal }  from "../../components/modal/Modal";
import { Footer } from "../../components/footer/Footer"


export function Catalog() {
  return (
    <>
      <Header />
      <Modal />
      <div className="page__wrapper">
        <div className="banner__wrapper">
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </div>
        <div className="content__wrapper">
          <div className="section__wrapper">
            <Menu />
            <Checkbox />
          </div>
          <Grid />
          <Cart />
        </div>
        <Pagination />
      </div>
      <Footer />
    </> 
  );
}