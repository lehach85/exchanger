import {currencies} from "@/shared/config";
import {ChartDataType} from "@/shared/types";

export const prepareChartOptions = (currencyFrom: string, daysLimit: number, chartData?: ChartDataType) => {

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

    return options;
}