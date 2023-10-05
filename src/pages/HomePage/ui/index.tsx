import {ExchangeRates} from "@/entities/ExchangeRates";
import {PageTitle} from "@/widgets/PageTitle";

const HomePage = () => {
    return (
        <>
            <PageTitle title="Текущие курсы валют"/>
            <ExchangeRates/>
        </>
    );
};

export default HomePage;