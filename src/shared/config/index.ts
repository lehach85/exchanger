import {TCurrencyDetails} from "@/shared/types";

export const API_URL = "https://min-api.cryptocompare.com";
export { ROUTE_CONSTANTS } from "./routes";

export const REQUEST_TIMEOUT = 8000;

type TCurrencies = Record<string, TCurrencyDetails>

export const currencies: TCurrencies = {
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

// Get an array of currencies keys (['RUB'],['USD']...)
export const currenciesArray: Array<string> = Object.keys(currencies);

// Get foreign currencies list (removing ruble)
const copiedCurrencies = Object.assign({}, currencies);
delete copiedCurrencies.RUB;
export const foreignCurrencies: TCurrencies  = copiedCurrencies;

// Get an array of foreign currencies keys(['RUB'],['USD']...)
const copiedForeignCurrencies = Object.assign({}, currencies);
delete copiedForeignCurrencies.RUB;
export const foreignCurrenciesArray: Array<string> = Object.keys(copiedForeignCurrencies);

// Russian localization for HighChart module
export const highChartRuOptions = {
    lang: {
        loading: 'Загрузка...',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
    }
}

// Days periods for RatesChart
export const ratesChartDaysValues = [5, 10, 15, 20, 25, 30]