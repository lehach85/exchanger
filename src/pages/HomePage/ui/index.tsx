import {ExchangeRates} from "@/entities/ExchangeRates";
import {PageTitle} from "@/widgets/PageTitle";
import {PageDescription} from "@/widgets/PageDescription";
import {ROUTE_CONSTANTS} from "@/shared/config";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <PageTitle title="Текущие курсы валют"/>
            <PageDescription>
                <p>
                    Ниже представлена таблица, отображажщая текущие биржевые курсы валют по отношению к рублю.
                    Данные получены с помощью API сайта <a href="https://min-api.cryptocompare.com/documentation">cryptocompare.com</a>.
                </p>
                <p>
                    Для просмотра графика изменения цены по каждой валюте, воспользуйтесь страницей <a href={ROUTE_CONSTANTS.RATES_CHART}>графики валют</a>.
                </p>
                <p>
                    Для конвертирования валют вы можете воспользоваться специальной страницей <Link to={ROUTE_CONSTANTS.RATES_CHART}>ковертор валют</Link>.
                </p>
            </PageDescription>
            <ExchangeRates/>
        </>
    );
};

export default HomePage;