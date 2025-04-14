import "../../assets/normalize.css";
import "../../assets/style.css";
import "./Auth.css"
import { ArrowLeft, NavArrowRight, WarningCircle } from "iconoir-react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Checkbox } from "../../components/checkbox/Checkbox";
export function Auth() {
    return (
        <>
            <Header />
            <div className="page__wrapper">
            <a className="auth__link" href="/">
            <ArrowLeft className="auth__arrow"/>
            На главную
            </a>
            <div className="auth">
            <progress className="auth__progress" id="file" max="100" value="25"></progress>
                <h1 className="head">
                    Добро пожаловать!
                </h1>
                <h2 className="subhead">
                    Введите номер телефона, чтобы войти
                    или зарегестрироваться
                </h2>
                <input className="auth__input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="+7(___)-___-__-__" required/>
                <button disabled className="auth__btn">
                    Получить код
                    <NavArrowRight className="icons"/>
                </button>
                <Checkbox />
                <div className="auth__agreement">
                    Продолжая авторизацию, вы соглашаетесь с политикой конфиденциальности, условиями сервиса и условиями продажи товаров
                    <WarningCircle className="icons" />
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}