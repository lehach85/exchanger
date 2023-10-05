import {ExchangeRates} from "@/entities/ExchangeRates";
import {PageTitle} from "@/widgets/PageTitle";
import {PageDescription} from "@/widgets/PageDescription";

const HomePage = () => {
    return (
        <>
            <PageTitle title="Текущие курсы валют"/>
            <PageDescription text="Ниже представлена таблица, отображажщая текущие биржевые курсы валют по отношению к рублю. Данные получены с помощью c сайта https://min-api.cryptocompare.com." />
            <ExchangeRates/>
        </>
    );
};

export default HomePage;