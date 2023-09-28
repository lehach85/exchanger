import './styles.css';

export const CurrencyInput = (props) => {
    return (
        <div className="currency-input">
            <input className="currency-input__amount" type="number" value={props.amount} />
            <select  className="currency-input__currency-symbol" value={props.currencySymbol}>
                {props.currencies.map((currency) => (
                    <option value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
};