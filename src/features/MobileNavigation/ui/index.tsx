import { NavLink } from "react-router-dom";
import './styles.css';
import {Dropdown} from "@/shared/ui/Dropdown/ui/Dropdown";

export const MobileNavigation  = () => {
    return (
        <div className="mobile-navigation">
            <Dropdown button={
                <button className="burger-icon">Меню<span></span></button>
            }>
                <div className="mobile-navigation__items">
                    <NavLink
                        to="/"
                        activeсlassname="mobile-navigation__items"
                        className="mobile-navigation__item"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/chart"
                        activeсlassname="mobile-navigation__item--state--active"
                        className="mobile-navigation__item"
                    >
                        График валют
                    </NavLink>
                    <NavLink
                        to="/converter"
                        activeсlassname="mobile-navigation__item--state--active"
                        className="mobile-navigation__item"
                    >
                        Конвертор валют
                    </NavLink>
                </div>
            </Dropdown>
        </div>
    );
};