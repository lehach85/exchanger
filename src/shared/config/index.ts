export const API_URL = "https://min-api.cryptocompare.com";
export { ROUTE_CONSTANTS } from "./routes";

export const REQUEST_TIMEOUT = 8000;

('RUB' | 'USD' | 'EUR' )

export const currencies = {
    'RUB': {
        ru_title: 'Российсий рубль',
        symbol: '₽'
    },
    'USD': {
        ru_title: 'Доллар США',
        symbol: '$'
    },
    'EUR': {
        ru_title: 'Евро',
        symbol: '€'
    },
    'JPY': {
        ru_title: 'Японская иена',
        symbol: '¥'
    },
    'TRY': {
        ru_title: 'Турецкая лира',
        symbol: '₺'

    },
    'AUD': {
        ru_title: 'Австралийский доллар',
        symbol: 'AU$'
    }
}

// Get an array (['RUB'],['USD']...)
export const currenciesArray: Array<string> = Object.keys(currencies);

// Get foreign currencies list (removing ruble)
const copiedCurrencies = Object.assign({}, currencies);
delete copiedCurrencies.RUB;
export const foreignCurrencies = copiedCurrencies;

// Get an array (['RUB'],['USD']...)
const copiedForeignCurrencies = Object.assign({}, currencies);
delete copiedForeignCurrencies.RUB;
export const foreignCurrenciesArray: Array<string> = Object.keys(copiedForeignCurrencies);
