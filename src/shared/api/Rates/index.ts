import {apiInstance} from "@/shared/api/base";

// Base URL for current price
const BASE_URL = "/data/price";

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