import {Logo} from "@/shared/ui/Logo";
import './styles.css';
import {MobileNavigation} from "@/features/MobileNavigation";
import {Navigation} from "@/features/Navigation";
import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <MobileNavigation />
        </header>
    );
};