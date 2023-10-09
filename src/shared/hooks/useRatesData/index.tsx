import {useEffect, useState} from "react";
import {getRates} from "@/shared/api/Rates";
import {RatesListType} from "@/shared/types";

export const useRatesData = (fsym: string, tsyms: Array<string>, withBaseCurrency:boolean = false) => {
    const [ratesData, setRatesData] = useState<RatesListType>();

    useEffect(() => {
        getRates(fsym, tsyms, withBaseCurrency)
            .then((res) => { setRatesData(res.data);} );
    },[])

    return [ratesData];
}