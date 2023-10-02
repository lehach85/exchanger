import {Header} from "@/widgets/Header";
import {ExchangeRates} from "@/entities/ExchangeRates";
import {PageTitle} from "@/widgets/PageTitle";
import {Footer} from "@/widgets/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <PageTitle title="Текущие курсы валют"/>
                <ExchangeRates/>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;