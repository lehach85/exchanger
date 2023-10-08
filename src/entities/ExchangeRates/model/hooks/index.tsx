import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import {getRates} from "@/shared/api/Rates";
import {RatesListType} from "@/shared/types";

export const useGetRatesData = () => {
    const [ratesData, setRatesData] = useState<RatesListType>();

    useEffect(() => {
        getRates('RUB', currenciesArray)
            .then((res) => { setRatesData(res.data);} );
    },[])

    return [ratesData];
}