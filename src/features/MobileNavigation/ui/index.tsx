import { NavLink } from "react-router-dom";
import './styles.css';
import { Dropdown } from "@/shared/ui/Dropdown";

export const MobileNavigation  = () => {
    return (
        <div className="mobile-navigation">
            <Dropdown button={
                <button className="burger-icon">Меню<span></span></button>
            }>
                <div className="mobile-navigation__items">
                    <NavLink
                        to="/"
                        className="mobile-navigation__item"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/chart"
                        className="mobile-navigation__item"
                    >
                        График валют
                    </NavLink>
                    <NavLink
                        to="/converter"
                        className="mobile-navigation__item"
                    >
                        Конвертор валют
                    </NavLink>
                </div>
            </Dropdown>
        </div>
    );
};