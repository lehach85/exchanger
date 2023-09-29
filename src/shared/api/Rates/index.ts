import {apiInstance} from "@/shared/api/base";

// Base URL for current price
const BASE_URL = "/data/price";

/**
 * Return rates between two currencies for N-days
 * @param {string} fsym - currency FROM
 * @param {string} fsym - currency TO
 * @param {boolean} withBaseCurrency - add or remove base currency from result
 */
export const getRates = async (fsym: string, tsyms: string[], withBaseCurrency?: boolean) => {
    const params = {
        fsym: fsym,
        tsyms: withBaseCurrency ? tsyms.join() : tsyms.filter((currency) => currency !== fsym).join(),
    }

    try {
        const response = await apiInstance.get(BASE_URL, { params });
        return response;
    } catch (error) {
        throw error;
    }
}