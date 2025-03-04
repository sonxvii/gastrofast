import "./Checkbox.css";
import { checkboxData } from "../../data";

export function Checkbox() {
    return (
        <div className="checkbox">
            {checkboxData.map((checkbox) => (
                <div className="checkbox__item" key={checkbox.id}>
                    <input
                        className="checkbox__input"
                        type="checkbox"
                        name={`checkbox-${checkbox.id}`}
                        id={`checkbox-${checkbox.id}`}
                    />
                    <label
                        htmlFor={`checkbox-${checkbox.id}`}
                        className="checkbox__label"
                        aria-label={checkbox.title}
                    >
                        <span className="checkbox__icon"></span>
                        {checkbox.title}
                    </label>
                </div>
            ))}
        </div>
    );
};