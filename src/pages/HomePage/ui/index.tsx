import {Header} from "@/widgets/Header";
import {ExchangeRates} from "@/entities/ExchangeRates/ui";
import {PageTitle} from "@/widgets/PageTitle/ui";

const HomePage = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Текущие курсы валют"/>
            <ExchangeRates/>
        </>
    );
};

export default HomePage;