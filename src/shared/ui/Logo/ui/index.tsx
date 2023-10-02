import './styles.css';
import LogoImage from '@/shared/assets/logo.svg';
import { NavLink } from "react-router-dom";

export const Logo = () => {
    return (
        <NavLink
            to="/"
            className="logo-link"
        >
            <img className="logo" src={LogoImage}  />
        </NavLink>
    );
};