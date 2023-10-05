import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useEffect, useState} from "react";

import {currencies, foreignCurrenciesArray, highChartRuOptions, ratesChartDays} from "@/shared/config";
import {CurrencySelector} from "@/shared/ui/CurrencySelector";

import {getHistoricalRates, prepareHistoricalDataForChart} from "@/shared/api/HistoricalRates";
import {TChartData} from "@/shared/types";
import {DaysSelector} from "@/shared/ui/DaysSelector/ui";

// Russian localization options
Highcharts.setOptions(highChartRuOptions);

export const RatesChart = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo] = useState<string>('RUB');
    const [daysLimit, setDaysLimit] = useState<number>(10);
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
            <p className="page-description">
                Ниже представлен график курса&nbsp;
                <CurrencySelector
                    currencies={foreignCurrenciesArray}
                    onCurrencyChange={handleCurrencyChange}
                /> к рублю
            </p>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <DaysSelector onLimitChange={handleLimitChange} daysLimit={daysLimit} />
        </div>
    );
};