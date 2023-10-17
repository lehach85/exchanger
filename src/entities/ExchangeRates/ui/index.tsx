import {currencies, currenciesArray} from "@/shared/config";
import './styles.css'
import {useRatesData} from "@/shared/hooks/useRatesData"
import React from "react";
import {TExchangeRates} from "@/entities/ExchangeRates/model/types";

export const ExchangeRates:React.FC<TExchangeRates> = ({initialCurrency = 'RUB'}) => {
    // TODO: show modal window by click on currency with general currency info and chart
    const [ratesData] = useRatesData(initialCurrency, currenciesArray);

    return (
        <div className="table exchange-rates-table">
            <div className="table-row">
                <div className="table-head-cell">Букв. код</div>
                <div className="table-head-cell">Единиц</div>
                <div className="table-head-cell">Валюта</div>
                <div className="table-head-cell">Курс</div>
            </div>
            { ratesData && Object.keys(ratesData).map((key) => {
                    return (
                        <div className="table-row" key={key}>
                            <div className="table-cell px-4">{key}</div>
                            <div className="table-cell">1</div>
                            <div className="table-cell">{currencies[key].ru_title}</div>
                            <div className="table-cell">{ (1 / ratesData[key]).toFixed(2) }</div>
                        </div>
                    )
                }
            )}
        </div>
    );
}