import {useEffect, useState} from "react";
import {ChartDataType} from "@/shared/types";
import {getHistoricalRates, prepareHistoricalDataForChart} from "@/shared/api/HistoricalRates";

export const useHistoricalRatesData = (currencyFrom: string, currencyTo: string, daysLimit: number)  => {
    const [chartData, setChartData] = useState<ChartDataType>();

    useEffect( () => {
        getHistoricalRates(currencyFrom, currencyTo, daysLimit)
            .then((res) => {
                setChartData(prepareHistoricalDataForChart(res.data));
            });
    },[currencyFrom, daysLimit]);

    return [chartData];
}