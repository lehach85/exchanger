import {Logo} from "@/shared/ui/Logo";
import './styles.css';
import {MobileNavigation} from "@/features/MobileNavigation";
import {Navigation} from "@/features/Navigation";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <MobileNavigation />
        </header>
    );
};