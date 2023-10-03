import { NavLink } from "react-router-dom";
import './styles.css';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink
                to="/"
                className="navigation__item"
            >
                Главная
            </NavLink>
            <NavLink
                to="/chart"
                className="navigation__item"
            >
                График валют
            </NavLink>
            <NavLink
                to="/converter"
                className="navigation__item"
            >
                Конвертор валют
            </NavLink>
        </nav>
    );
};