import "./Header.css";
import { Search, Position, Xmark, NavArrowRight } from "iconoir-react";

export function Header() {
    return (
        <div className="header">
            <form action="" className="input__search">
            <Search className="icons"/>
            <input type="text" className="search"
            placeholder="Искать в Гастрофаст"
            />
            <button>
            <Xmark />
            </button>
            </form>

            <form action="" className="input__adress">
            <Position className="icons"/>
            <input type="text" className="adress"
            placeholder="Лесная, 14Б"
            />
            <button>
            <NavArrowRight />
            </button>
            </form>
            </div>
    );
};