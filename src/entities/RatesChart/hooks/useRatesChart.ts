import {useState} from "react";
import {useHistoricalRatesData} from "@/shared/hooks/useHistoricalRatesData";
import {prepareChartOptions} from "@/entities/RatesChart/model/prepareChartOptions";
import {highChartRuOptions} from "@/shared/config";
import Highcharts from 'highcharts'

export const useRatesChart = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo] = useState<string>('RUB');
    const [daysLimit, setDaysLimit] = useState<number>(15);
    const [chartData] = useHistoricalRatesData(currencyFrom, currencyTo, daysLimit);

    // Get Chart options
    const options = prepareChartOptions(currencyFrom, daysLimit, chartData)

    // Russian localization options
    Highcharts.setOptions(highChartRuOptions);

    const handleCurrencyChange = (value: string): void => {
        setCurrencyFrom(value);
    }

    const handleLimitChange = (value: number): void => {
        setDaysLimit(value);
    }

    return {daysLimit, chartData, options, handleCurrencyChange, handleLimitChange}
}