import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useEffect, useState} from "react";

import {currencies, foreignCurrenciesArray, highChartRuOptions} from "@/shared/config";
import {CurrencySelector} from "@/shared/ui/CurrencySelector";

import {getHistoricalRates, prepareHistoricalDataForChart} from "@/shared/api/HistoricalRates";
import {TChartData} from "@/shared/types";
import {DaysSelector} from "@/shared/ui/DaysSelector/ui";

export const RatesChart = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo] = useState<string>('RUB');
    const [daysLimit, setDaysLimit] = useState<number>(15);
    const [chartData, setChartData] = useState<TChartData>()

    const options = {
        title: {
            text: `График изменения курса ${currencyFrom} (${currencies[currencyFrom].ru_title}) к рублю за ${daysLimit} дней`
        },
        className: "currency-chart__chart",
        accessibility: {
            enabled: false
        },
        yAxis: {
            title: {
                text: currencies['RUB'].ru_title,
            },
        },
        xAxis: {
            type: 'datetime',
        },
        plotOptions: {
            series: {
                pointStart: 2020
            },
        },
        series: [{
            name: currencies[currencyFrom].ru_title,
            data:
                chartData
            },
        ],
    }

    // Russian localization options
    Highcharts.setOptions(highChartRuOptions);

    useEffect( () => {
        getHistoricalRates(currencyFrom, currencyTo, daysLimit)
            .then((res) => {
                setChartData(prepareHistoricalDataForChart(res.data));
            });
    },[currencyFrom, daysLimit]);

    const handleCurrencyChange = (value: string): void => {
        setCurrencyFrom(value);
    }

    const handleLimitChange = (value: number): void => {
        setDaysLimit(value);
    }

    return (
        <div className="currency-chart">
            <div className="currency-chart__description">
                <p>Выберете интересующую вас валюту&nbsp;
                    <CurrencySelector
                        currencies={foreignCurrenciesArray}
                        onCurrencyChange={handleCurrencyChange}
                    /></p>
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <DaysSelector onLimitChange={handleLimitChange} daysLimit={daysLimit} />
        </div>
    );
};