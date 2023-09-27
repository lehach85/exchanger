import { Navigation  } from "@/features/Navigation";
import {Logo} from "@/shared/ui/Logo/ui";
import './styles.css';

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            {/*TODO: Make mobile menu for screens < 768 <MobileMenu />*/}
        </header>
    );
};