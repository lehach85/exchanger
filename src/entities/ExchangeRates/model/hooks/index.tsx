import {useEffect, useState} from "react";
import {currenciesArray} from "@/shared/config";
import {getRates} from "@/shared/api/Rates";

export const useGetRatesData = () => {
    const [ratesData, setRatesData] = useState();

    useEffect(() => {
        getRates('RUB', currenciesArray)
            .then((res) => { setRatesData(res.data);} );
    },[])

    return [ratesData];
}