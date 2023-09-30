import {Logo} from "@/shared/ui/Logo";
import './styles.css';
import {MobileNavigation} from "@/widgets/MobileNavigation";
import {Navigation} from "@/widgets/Navigation";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <MobileNavigation />
        </header>
    );
};