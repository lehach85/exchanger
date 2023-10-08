// Rates list type
export type RatesListType = Record<string, number>;

// Currency details (ru_title, symbol)
export type TCurrencyDetails = {
    ru_title: string,
    symbol: string,
}

// Currencies list
export type CurrenciesType = Record<string, TCurrencyDetails>

//  Date format for chart table
export type ChartDataType = number[][];


// Historical rate item format (date from API)
export type HistoricalRatesItemType = {
    close: number,
    conversionSymbol: string,
    conversionType: string,
    high: number,
    low: number,
    open: number,
    time: number,
    volumefrom: number,
    volumeto: number
}

export type HistoricalRatesItemTypes = [HistoricalRatesItemType]

// Historical rates response Data
export type HistoricalRatesDataType = {
    Data: HistoricalRatesInnerDataType,
    HasWarning: boolean,
    RateLimit: object,
    Response: string,
    Type: number
}

export type HistoricalRatesInnerDataType = {
    Aggregated: boolean
    Data: HistoricalRatesItemTypes,
    TimeFrom: number,
    TimeTo: number
}