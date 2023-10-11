import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import {CurrencyInput} from "@/shared/ui/CurrencyInput";
import {calcRate} from "@/shared/utils/calcRate/";
import './styles.css'
import {useRatesData} from "@/shared/hooks/useRatesData";

export const Converter = () => {
    const [amountFirst, setAmountFirst] = useState<number>(1);
    const [amountSecond, setAmountSecond] = useState<number>(1);

    const [currencytFirst, setCurrencyFirst] = useState<string>('USD');
    const [currencySecond, setCurrencySecond] = useState<string>('RUB');

    const [ratesList] = useRatesData(currencySecond, currenciesArray, true);

    useEffect(() => {
        if (!!ratesList) {
            handleAmountFirstChange(amountFirst);
        }
    },[ratesList])

    const handleAmountFirstChange = (amountFirst: number): void => {
        if (ratesList) {
            setAmountSecond(calcRate(amountFirst, ratesList[currencySecond], ratesList[currencytFirst]))
        }
        setAmountFirst(amountFirst)
    }

    const handleCurrencyFirstChange = (currencytFirst: string): void => {
        if (ratesList) {
            setAmountSecond(calcRate(amountFirst, ratesList[currencySecond], ratesList[currencytFirst]))
        }
        setCurrencyFirst(currencytFirst);
    }

    const handleAmountSecondChange = (amountSecond: number): void => {
        if (ratesList) {
            setAmountFirst(calcRate(amountSecond, ratesList[currencytFirst], ratesList[currencySecond]))
        }
        setAmountSecond(amountSecond)
    }
    
    const handleCurrencySecondChange = (currencySecond: string): void => {
        if (ratesList) {
            setAmountFirst(calcRate(amountSecond, ratesList[currencytFirst], ratesList[currencySecond]))
        }
        setCurrencySecond(currencySecond);
    }

    return (
        <div className="converter">
            <CurrencyInput
                currencies={currenciesArray}
                amount={amountFirst}
                currencySymbol={currencytFirst}
                onAmountChange={handleAmountFirstChange}
                onCurrencyChange={handleCurrencyFirstChange}
            />
            <CurrencyInput
                currencies={currenciesArray}
                amount={amountSecond}
                currencySymbol={currencySecond}
                onAmountChange={handleAmountSecondChange}
                onCurrencyChange={handleCurrencySecondChange}
            />
        </div>
    );
}