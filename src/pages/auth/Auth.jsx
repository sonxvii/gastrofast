import "../../assets/normalize.css";
import "../../assets/style.css";
import "./Auth.css"
import { ArrowLeft, InfoCircle, NavArrowRight, WarningCircle } from "iconoir-react";
import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Checkbox } from "../../components/checkbox/Checkbox";
export function Auth() {
    const ref = useRef(null);
    const inputRef = useRef(null);
    return (
        <>
            <Header />
            <div className="page__wrapper align">
                <div className="page__content">
                    <button className="auth__link" href="http://localhost:5173/#">
                        <ArrowLeft className="auth__arrow" />
                        На главную
                    </button>
                    <div className="auth">
                        <progress className="auth__progress" id="file" max="100" value="25"></progress>
                        <h1 className="head">
                            Добро пожаловать!
                        </h1>
                        <h2 className="subhead">
                            Введите номер телефона, чтобы войти
                            или зарегестрироваться
                        </h2>
                        <IMaskInput className="auth__input"
                            mask='+{7}(000)000-00-00'
                            // radix="."
                            // value="123"
                            unmask={true} // true|false|'typed'
                            ref={ref}
                            inputRef={inputRef}  // access to nested input
                            // DO NOT USE onChange TO HANDLE CHANGES!
                            // USE onAccept INSTEAD
                            onAccept={
                                // depending on prop above first argument is
                                // `value` if `unmask=false`,
                                // `unmaskedValue` if `unmask=true`,
                                // `typedValue` if `unmask='typed'`
                                (value, mask) => console.log(value)
                            }
                            // ...and more mask props in a guide

                            // input props also available
                            placeholder='+7(___)-___-__-__'
                        />
                        <button disabled className="auth__btn">
                            Получить код
                            <NavArrowRight className="icons" />
                        </button>
                        <Checkbox />
                        <section className="agreement">
                            <InfoCircle className="icons" />
                            <p className="agreement-text">
                                Продолжая авторизацию, вы соглашаетесь с&nbsp;
                                <a href="#" className="agreement-link">политикой конфиденциальности</a>,&nbsp;
                                <a href="#" className="agreement-link">условиями сервиса</a> и&nbsp;
                                <a href="#" className="agreement-link">условиями продажи товаров</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}