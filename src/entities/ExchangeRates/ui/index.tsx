import {currencies, currenciesArray} from "@/shared/config";
import './styles.css'
import {useRatesData} from "@/shared/hooks/useRatesData"

export const ExchangeRates = () => {
    const [ratesData] = useRatesData('RUB', currenciesArray);

    return (
        <div className="table exchange-rates-table">
            <div className="table-row">
                <div className="table-head-cell">Букв. код</div>
                <div className="table-head-cell">Единиц</div>
                <div className="table-head-cell">Валюта</div>
                <div className="table-head-cell">Курс</div>
            </div>
            { ratesData && Object.keys(ratesData).map((key) => {
                    return (
                        <div className="table-row" key={key}>
                            <div className="table-cell px-4">{key}</div>
                            <div className="table-cell">1</div>
                            <div className="table-cell">{currencies[key].ru_title}</div>
                            <div className="table-cell">{ (1 / ratesData[key]).toFixed(2) }</div>
                        </div>
                    )
                }
            )}
        </div>
    );
}