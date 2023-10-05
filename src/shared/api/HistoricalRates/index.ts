import {apiInstance} from "@/shared/api/base";
import {THistoricalRatesData, THistoricalRatesItem, TChartData} from "@/shared/types";

// Base URL for current price
const BASE_URL = "/data/v2/histoday";

/**
 * Return rates between two currencies for N-days
 * @param {string} fsym - currency FROM
 * @param {string} fsym - currency TO
 * @param {number} limit - N-days
 */
export const getHistoricalRates = async (fsym: string, tsym: string, limit: number = 1) => {

    const params = {
        fsym: fsym,
        tsym: tsym,
        limit: limit - 1 // API feature
    }

    try {
        const response = await apiInstance.get(BASE_URL, { params });
        return response;
    } catch (error) {
        throw error;
    }
}

export const prepareHistoricalDataForChart = (data: THistoricalRatesData): TChartData => {
    const dataByDays = data.Data.Data;
    return dataByDays.map((item: THistoricalRatesItem) => [item.time*1000, item.close] );
}