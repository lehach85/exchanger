import {apiInstance} from "@/shared/api/base";

// Base URL for current price
// params

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
        limit: limit
    }

    try {
        const response = await apiInstance.get(BASE_URL, { params });
        return response;
    } catch (error) {
        throw error;
    }
}