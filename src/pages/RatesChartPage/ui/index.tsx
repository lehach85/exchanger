import {PageTitle} from "@/widgets/PageTitle";
import {RatesChart} from "@/entities/RatesChart";

const RatesChartPage = () => {
    return (
        <>
            <PageTitle title="Курсы валют на сегодня"/>
            <RatesChart />
        </>
    );
};

export default RatesChartPage;