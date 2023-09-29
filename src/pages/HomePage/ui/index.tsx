import {Header} from "@/widgets/Header";
import {ExchangeRates} from "@/entities/ExchangeRates/ui";
import {PageTitle} from "@/widgets/PageTitle/ui";
import React from "react";

export const HomePage: React.FC = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Текущие курсы валют"/>
            <ExchangeRates/>
        </>
    );
};