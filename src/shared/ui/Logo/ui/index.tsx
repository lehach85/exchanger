import './styles.css';
import LogoImage from '@/shared/assets/logo.svg';

export const Logo = () => {
    return (
        <img className="logo" src={LogoImage}  />
    );
};