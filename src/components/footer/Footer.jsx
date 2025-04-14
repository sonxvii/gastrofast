import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__links">
                <ul className="footer__faq">
                    <li>Контакты</li>
                    <li>Ответы на вопросы</li>
                    <li>Работа в Гастрофаст</li>
                    <li>Правила и соглашения</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <ul className="footer__socials">
                    <li>Telegram</li>
                    <li>ВКонтакте</li>
                </ul>
                </div>
                <span className="footer__copyright">© 2025</span>
            </div>
            <div className="footer__logo">
                <img src="../../../public/logo-black.svg" alt="" />
            </div>
        </footer>
    );
}