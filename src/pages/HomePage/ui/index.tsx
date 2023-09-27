import {Header} from "@/widgets/Header";
import {ExchangeRates} from "@/entities/ExchangeRates/ui";
import {PageTitle} from "@/widgets/PageTitle/ui";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Курсы валют на сегодня"/>
            <ExchangeRates/>
        </>
    );
};