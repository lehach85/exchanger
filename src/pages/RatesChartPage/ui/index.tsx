import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {RatesChart} from "@/entities/RatesChart";

const RatesChartPage = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Курсы валют на сегодня"/>
            <RatesChart />
        </>
    );
};

export default RatesChartPage;