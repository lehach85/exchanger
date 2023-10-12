export type CurrencyInputProps = {
    amount: number,
    currencies: string[],
    currencySymbol: string,
    onAmountChange: (value: number) => void,
    onCurrencyChange: (value: string) => void,
}