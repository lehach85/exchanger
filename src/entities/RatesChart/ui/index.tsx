import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useState} from "react";

import {foreignCurrenciesArray, highChartRuOptions} from "@/shared/config";
import {CurrencySelector} from "@/shared/ui/CurrencySelector";
import {DaysSelector} from "@/shared/ui/DaysSelector/ui";

import {useHistoricalRatesData} from "@/shared/hooks/useHistoricalRatesData";
import {prepareChartOptions} from "@/entities/RatesChart/model/prepareChartOptions";

export const RatesChart = () => {
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

    const isShowChart = () => options && chartData;

    return (
        <div className="currency-chart">
            <div className="currency-chart__description">
                <p>Выберете интересующую вас валюту&nbsp;
                    <CurrencySelector
                        currencies={foreignCurrenciesArray}
                        onCurrencyChange={handleCurrencyChange}
                    />&nbsp;
                    Выбрать интересующий вас период в днях вы можете под графиком валюты.
                </p>
            </div>
            { isShowChart()
                && <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            }
            { isShowChart() &&
                <DaysSelector onLimitChange={handleLimitChange} daysLimit={daysLimit} />
            }
        </div>
    );
};