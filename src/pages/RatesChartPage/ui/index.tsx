import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {RatesChart} from "@/entities/RatesChart";
import {Footer} from "@/widgets/Footer";

const RatesChartPage = () => {
    return (
        <>
            <Header/>
            <main>
                <PageTitle title="Курсы валют на сегодня"/>
                <RatesChart />
            </main>
            <Footer />
        </>
    );
};

export default RatesChartPage;