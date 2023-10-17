import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {foreignCurrenciesArray} from "@/shared/config";
import {CurrencySelector} from "@/shared/ui/CurrencySelector";
import {DaysSelector} from "@/shared/ui/DaysSelector/ui";

import {useRatesChart} from "@/entities/RatesChart/hooks/useRatesChart";

export const RatesChart = () => {
    const {
        daysLimit,
        chartData,
        options,
        handleCurrencyChange,
        handleLimitChange
    } = useRatesChart()

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