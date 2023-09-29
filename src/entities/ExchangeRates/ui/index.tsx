import React, {useEffect, useState} from "react";
import {currencies, currenciesArray} from "@/shared/config";
import './styles.css'
import {getRates} from "@/shared/api/Rates";
import {TRatesList} from "@/shared/types"

export const ExchangeRates: React.FC = () => {
    const [ratesList, setRatesList] = useState<TRatesList>();

    useEffect(()=> {
        getRates('RUB', currenciesArray)
            .then((res) => { setRatesList(res.data);} );
    },[]);

    return (
        <div className="table exchange-rates-table">
            <div className="table-row">
                <div className="table-head-cell">Букв. код</div>
                <div className="table-head-cell">Единиц</div>
                <div className="table-head-cell">Валюта</div>
                <div className="table-head-cell">Курс</div>
            </div>
            { ratesList && Object.keys(ratesList).map((key) => {
                    return (
                        <div className="table-row" key={key}>
                            <div className="table-cell px-4">{key}</div>
                            <div className="table-cell">1</div>
                            <div className="table-cell">{currencies[key].ru_title}</div>
                            <div className="table-cell">{ (1 / ratesList[key]).toFixed(2) }</div>
                        </div>
                    )
                }
            )}
        </div>

    );
}