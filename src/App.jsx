import "./assets/normalize.css";
import "./assets/style.css";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { Grid } from "./components/grid/Grid";
import { Menu } from "./components/menu/Menu";
import { Cart } from "./components/cart/Cart";


export default function App() {
  return (
    <>
    <Header />
    <div className="page__wrapper">
    <div className="banner__wrapper">
    <Banner />
    <Banner />
    <Banner />
    <Banner />
    </div>
    <div className="content__wrapper">
      <Menu />
      <Grid />
      <Cart />
    </div>
    </div>
    </>
  );
}