import './styles.css';
import LogoImage from '@/shared/assets/logo.svg';
import React from "react";

export const Logo: React.FC = () => {
    return (
        <img className="logo" src={LogoImage}  />
    );
};