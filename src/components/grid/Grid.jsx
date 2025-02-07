import { Card } from "../card/Card";
import { products } from "../../data";

export function Grid() {
  return (
    <div className="catalog__grid">
      {products.map((product) => (
        <Card
          key={product.id}
          imgSrc={product.imgSrc}
          price={product.price}
          title={product.title} 
          weight={product.weight}
        />
      ))}
    </div>
  );
}