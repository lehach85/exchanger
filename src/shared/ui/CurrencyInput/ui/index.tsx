import './styles.css';
import {CurrencyInputProps} from '../model/types'

export const CurrencyInput = ({amount, currencies, currencySymbol, onAmountChange, onCurrencyChange}: CurrencyInputProps) => {

    return (
        <div className="currency-input">
            <input
               className="currency-input__amount"
               type="number"
               value={amount}
               onChange={(event) => {onAmountChange(event.target.valueAsNumber)}}
            />
            <select
                className="currency-input__currency-symbol"
                value={currencySymbol}
                onChange={(event) => {onCurrencyChange(event.target.value)}}
            >
                {currencies.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
};