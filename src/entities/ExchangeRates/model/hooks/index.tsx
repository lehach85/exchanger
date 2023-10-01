import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import {getRates} from "@/shared/api/Rates";
import {TRatesList} from "@/shared/types";

export const useGetRatesData = () => {
    const [ratesData, setRatesData] = useState<TRatesList>();

    useEffect(() => {
        getRates('RUB', currenciesArray)
            .then((res) => { setRatesData(res.data);} );
    },[])

    return [ratesData];
}