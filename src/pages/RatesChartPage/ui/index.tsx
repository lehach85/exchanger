import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {RatesChart} from "@/entities/RatesChart";

export const RatesChartPage = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Курсы валют на сегодня"/>
            <RatesChart />
        </>
    );
};