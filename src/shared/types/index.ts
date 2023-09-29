// Rates list type
export type TRatesList = Record<string, number>;

// Currency details (ru_title, symbol)
export type TCurrencyDetails = {
    ru_title: string,
    symbol: string,
}

//  Date format for chart table
export type TChartData = Record<number, number>

// Historical rate item format (date from API)
export type THistoricalRatesItem = {
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