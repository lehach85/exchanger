import React from "react";
import {CurrencySelectorProps} from '../model/types'

export const CurrencySelector: React.FC<CurrencySelectorProps> =
    ({
      currencies,
      onCurrencyChange,
    }) => {
    return (
        <select className="currency-selector" onChange={(event) => {onCurrencyChange(event.target.value)}}>
            {currencies.map((currency) => (
                <option value={currency} key={currency}>{currency}</option>
            ))}
        </select>
    );
};