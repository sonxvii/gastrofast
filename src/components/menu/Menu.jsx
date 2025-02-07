import React, { useState } from "react";
import "./Menu.css";

export function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div className="menu"> Меню
      <div
        className={`menu__elem ${activeIndex === 0 ? "elem__selected" : ""}`} // добавить класс
        onClick={() => handleClick(0)}>
        Title
      </div>
      <div
        className={`menu__elem ${activeIndex === 1 ? "elem__selected" : ""}`}
        onClick={() => handleClick(1)}>
        Title
      </div>
      <div
        className={`menu__elem ${activeIndex === 2 ? "elem__selected" : ""}`}
        onClick={() => handleClick(2)}>
        Title
      </div>
    </div>
  );
}