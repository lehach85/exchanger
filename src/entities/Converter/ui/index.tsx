import {useEffect, useState} from "react";
import {currencies} from "@/shared/config";
import './styles.css'
import {CurrencyInput} from "@/entities/CurrencyInput/ui";

export const Converter = () => {
    // const [ratesList, setRatesList] = useState();
    //
    // const currenciesList = Object.keys(currencies);
    //
    // useEffect(()=> {
    //     getRates('RUB', currenciesList)
    //         .then((res) => setRatesList(res.data));
    // },[]);

    return (
        <div className="converter">
            <CurrencyInput currencies={[]} />
            <CurrencyInput currencies={[]} />
        </div>

    );
}