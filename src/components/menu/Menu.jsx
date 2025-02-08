import React, { useState } from "react";
import "./Menu.css";
import { menuData } from "../../data";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="menu"> Меню
      {menuData.map((item, index) => (
        <div
          key={item.id}
          className={`menu__elem ${activeCategory === index ? "elem__selected" : ""}`}
          onClick={() => setActiveCategory(index)}>{item.title}
        </div>
      ))}
    </div>
  );
}
