import { useState } from "react";
import { createPortal } from "react-dom";
import { Card } from "../card/Card";
import { Modal } from "../modal/Modal";
import { products } from "../../data";
import "./Grid.css";

export function Grid({ onCardClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <div className="catalog__grid">
        {products.map((product) => (
          <div key={product.id} onClick={() => openModal(product)}>
            <Card
              imgSrc={product.imgSrc}
              price={product.price}
              title={product.title}
              weight={product.weight}
            />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <>
          <div className="page-tint" onClick={closeModal}></div> {/* Page Tint */}
          {createPortal(
            <Modal product={selectedProduct} onClose={closeModal} />,
            document.getElementById("modal-root")
          )}
        </>
      )}
    </>
  );
}
