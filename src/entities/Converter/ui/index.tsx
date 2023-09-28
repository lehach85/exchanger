import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import './styles.css'
import {CurrencyInput} from "@/entities/CurrencyInput/ui";
import {getRates} from "@/shared/api/Rates";
import {formatPrice} from "@/shared/utils/formatPrice"

export const Converter = () => {
    const [ratesList, setRatesList] = useState();

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('RUB');

    useEffect(()=> {
        getRates('RUB', currenciesArray, true)
            .then((res) => {
                setRatesList(res.data)
            });
    },[]);


    const handleAmount1Change = (amount1) => {
        setAmount2(formatPrice(amount1 * ratesList[currency2] / ratesList[currency1]))
        setAmount1(amount1)
    }

    const handleCurrency1Change = (currency1) => {
        setAmount2(formatPrice(amount1 * ratesList[currency2] / ratesList[currency1]))
        setCurrency1(currency1);
    }

    const handleAmount2Change = (amount2) => {
        setAmount1(formatPrice(amount2 * ratesList[currency1] / ratesList[currency2]))
        setAmount2(amount2)
    }
    const handleCurrency2Change = (currency1) => {
        setAmount1(formatPrice(amount2 * ratesList[currency1] / ratesList[currency2]))
        setCurrency2(currency2);
    }

    return (
        <div className="converter">
            <CurrencyInput
                currencies={currenciesArray}
                amount={amount1}
                currencySymbol={currency1}
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
            />
            <CurrencyInput
                currencies={currenciesArray}
                amount={amount2}
                currencySymbol={currency2}
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
            />
        </div>

    );
}