import {useState} from "react";
import {currenciesArray} from "@/shared/config";
import {CurrencyInput} from "@/shared/ui/CurrencyInput";
import {calcRate} from "@/shared/utils/calcRate/";
import './styles.css'
import {useRatesData} from "@/shared/hooks/useRatesData";

export const Converter = () => {
    const [amount1, setAmount1] = useState<number>(1);
    const [amount2, setAmount2] = useState<number>(1);

    const [currency1, setCurrency1] = useState<string>('USD');
    const [currency2, setCurrency2] = useState<string>('RUB');

    const [ratesList] = useRatesData(currency2, currenciesArray, true);

    const handleAmount1Change = (amount1: number): void => {
        if (ratesList) {
            setAmount2(calcRate(amount1, ratesList[currency2], ratesList[currency1]))
        }
        setAmount1(amount1)
    }

    const handleCurrency1Change = (currency1: string): void => {
        if (ratesList) {
            setAmount2(calcRate(amount1, ratesList[currency2], ratesList[currency1]))
        }
        setCurrency1(currency1);
    }

    const handleAmount2Change = (amount2: number): void => {
        if (ratesList) {
            setAmount1(calcRate(amount2, ratesList[currency1], ratesList[currency2]))
        }
        setAmount2(amount2)
    }
    const handleCurrency2Change = (currency2: string): void => {
        if (ratesList) {
            setAmount1(calcRate(amount2, ratesList[currency1], ratesList[currency2]))
        }
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