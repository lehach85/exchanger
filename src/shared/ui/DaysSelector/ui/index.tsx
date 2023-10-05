import React from "react";
import {ratesChartDaysValues} from "@/shared/config";
import {DaysSelectorProps} from "../model/types"
import './styles.css';

const DaysSelector: React.FC<DaysSelectorProps> =
    ({
      daysLimit,
      onLimitChange,
    }) => {
    return (
        <div className="days-selector">
            <span className="days-selector__label">За период</span>
            {ratesChartDaysValues.map( (days) =>
                <span onClick={() =>
                {onLimitChange(days)}}
                className={days === daysLimit ? "days-selector__item days-selector__item--state--active" : "days-selector__item"}
                key={`days-${days}`}
                >
                    {days}
                </span> )}
            <span className="days-selector__label">дней</span>
        </div>
    );
};

export {DaysSelector}