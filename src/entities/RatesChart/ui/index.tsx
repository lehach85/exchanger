import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useEffect, useState} from "react";

import {currencies, foreignCurrenciesArray} from "@/shared/config";
import {CurrencySelector} from "@/entities/CurrencySelector";

import {getHistoricalRates} from "@/shared/api/HistoricalRates";

export const RatesChart = () => {
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo] = useState('RUB');
    const [daysLimit] = useState(10);
    const [chartData, setChartData] = useState()

    const options = {
        title: {
            text: `График изменения курса за ${daysLimit} дней`
        },
        yAxis: {
            title: {
                text: 'Стоимость в рублях'
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
        ]
    }

    useEffect( () => {
        getHistoricalRates(currencyFrom, currencyTo, daysLimit)
            .then((res) => {
                // console.log(res.data.Data.Data);
                const dataByDays = res.data.Data.Data;
                const newChartData = dataByDays.map((item) => [item.time*1000, item.close]);
                setChartData(newChartData);
            });
    },[currencyFrom]);

    const handleCurrencyChange = (value) => {
        setCurrencyFrom(value);
    }

    return (
        <div className="currency-chart">
            <p className="page-description">
                Ниже представлена таблица курса&nbsp;
                <CurrencySelector
                    currencies={foreignCurrenciesArray}
                    currencySymbol={currencyFrom}
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