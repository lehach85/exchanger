import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import {CurrencyInput} from "@/shared/ui/CurrencyInput";
import {calcRate} from "@/shared/utils/calcRate/";
import './styles.css'
import {useRatesData} from "@/shared/hooks/useRatesData";

export const Converter = () => {
    // TODO: replace with reducer or combine handlers
    const [amountFirst, setAmountFirst] = useState<number>(1);
    const [amountSecond, setAmountSecond] = useState<number>(1);

    const [currencyFirst, setCurrencyFirst] = useState<string>('USD');
    const [currencySecond, setCurrencySecond] = useState<string>('RUB');

    const [ratesList] = useRatesData(currencySecond, currenciesArray, true);

    // Calculate rates for initial state
    useEffect(() => {
        if (!!ratesList) {
            handleAmountFirstChange(amountFirst);
        }
    },[ratesList])

    const handleAmountFirstChange = (amountFirst: number): void => {
        if (ratesList) {
            setAmountSecond(calcRate(amountFirst, ratesList[currencySecond], ratesList[currencyFirst]))
        }
        setAmountFirst(amountFirst)
    }

    const handleCurrencyFirstChange = (currencyFirst: string): void => {
        if (ratesList) {
            setAmountSecond(calcRate(amountFirst, ratesList[currencySecond], ratesList[currencyFirst]))
        }
        setCurrencyFirst(currencyFirst);
    }

    const handleAmountSecondChange = (amountSecond: number): void => {
        if (ratesList) {
            setAmountFirst(calcRate(amountSecond, ratesList[currencyFirst], ratesList[currencySecond]))
        }
        setAmountSecond(amountSecond)
    }
    
    const handleCurrencySecondChange = (currencySecond: string): void => {
        if (ratesList) {
            setAmountFirst(calcRate(amountSecond, ratesList[currencyFirst], ratesList[currencySecond]))
        }
        setCurrencySecond(currencySecond);
    }

    return (
        <div className="converter">
            <CurrencyInput
                currencies={currenciesArray}
                amount={amountFirst}
                currencySymbol={currencyFirst}
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