import "./assets/normalize.css";
import "./assets/style.css";
import { Grid } from "./components/grid/Grid";
import { Menu } from "./components/menu/Menu";
import { Cart } from "./components/cart/Cart";

export default function App() {
  return (
    <div className="content__wrapper">
      <Menu />
      <Grid />
      <Cart />
    </div>
  );
}