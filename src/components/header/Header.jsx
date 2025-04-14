import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Search, Position, Xmark, NavArrowRight, User } from "iconoir-react";

export function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <a href="http://localhost:5173/#">
                <img src="/logo-green-fill.svg" alt="logo" className="logo" />
            </a>

            <form action="" className="input__search">
                <Search className="icons" />
                <input
                    type="text"
                    className="search"
                    placeholder="Искать в Гастрофаст"
                />
                <button className="cancel__search" name="cancel search">
                    <Xmark className="icons" />
                </button>
            </form>

            <form action="" className="input__adress">
                <Position className="icons" />
                <span className="adress__is">Адрес</span>
                <input
                    type="text"
                    className="adress"
                    placeholder="Лесная, 14Б"
                    readOnly
                />
                <button className="change__location" name="change location">
                    <NavArrowRight className="icons" />
                </button>
            </form>

            <button
                className="sign__in"
                name="sign in"
                onClick={() => navigate("/auth")}
            >
                <User className="icons" />
                Войти
            </button>
        </div>
    );
}
