import { NavLink } from "react-router-dom";
import './styles.css';

export const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink
                to="/"
                activeсlassname="navigation__items"
                className="navigation__item"
            >
                Главная
            </NavLink>
            <NavLink
                to="/chart"
                activeсlassname="navigation__item--state--active"
                className="navigation__item"
            >
                График валют
            </NavLink>
            <NavLink
                to="/converter"
                activeсlassname="navigation__item--state--active"
                className="navigation__item"
            >
                Конвертор валют
            </NavLink>
        </div>
    );
};