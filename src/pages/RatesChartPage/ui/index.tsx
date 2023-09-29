import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {RatesChart} from "@/entities/RatesChart";
import React from "react";

export const RatesChartPage: React.FC = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Курсы валют на сегодня"/>
            <RatesChart />
        </>
    );
};