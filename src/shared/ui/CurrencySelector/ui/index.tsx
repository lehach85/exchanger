import React from "react";

type CurrencySelectorProps = {
    currencies: string[],
    onCurrencyChange: (value: string) => void
}

export const CurrencySelector: React.FC = ({currencies, onCurrencyChange}: CurrencySelectorProps) => {
    return (
        <select className="currency-selector" onChange={(event) => {onCurrencyChange(event.target.value)}}>
            {currencies.map((currency) => (
                <option value={currency} key={currency}>{currency}</option>
            ))}
        </select>
    );
};