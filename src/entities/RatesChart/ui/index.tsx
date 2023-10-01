import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useEffect, useState} from "react";

import {currencies, foreignCurrenciesArray, highChartRuOptions} from "@/shared/config";
import {CurrencySelector} from "@/shared/ui/CurrencySelector";

import {getHistoricalRates} from "@/shared/api/HistoricalRates";
import {TChartData, THistoricalRatesItem} from "@/shared/types";

// Russian localization options
Highcharts.setOptions(highChartRuOptions);

export const RatesChart = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo] = useState<string>('RUB');
    const [daysLimit] = useState<number>(10);
    const [chartData, setChartData] = useState<TChartData>()

    const options = {
        title: {
            text: `График изменения курса за ${daysLimit} дней`
        },
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

    useEffect( () => {
        getHistoricalRates(currencyFrom, currencyTo, daysLimit)
            .then((res) => {
                const dataByDays = res.data.Data.Data;
                const newChartData = dataByDays.map((item: THistoricalRatesItem) => [item.time*1000, item.close] );
                setChartData(newChartData);
            });
    },[currencyFrom]);

    const handleCurrencyChange = (value: string): void => {
        setCurrencyFrom(value);
    }

    return (
        <div className="currency-chart">
            <p className="page-description">
                Ниже представлена таблица курса&nbsp;
                <CurrencySelector
                    currencies={foreignCurrenciesArray}
                    onCurrencyChange={handleCurrencyChange}
                /> к рублю
            </p>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};