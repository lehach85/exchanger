import {FC} from "react";

import {ROUTE_CONSTANTS} from "@/shared/config";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "./HomePage";
import {ConverterPage} from "./ConverterPage";
import {RatesChartPage} from "./RatesChartPage";

export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage/>}/>
            <Route path={ROUTE_CONSTANTS.CONVERTER} element={<ConverterPage/>}/>
            <Route path={ROUTE_CONSTANTS.RATES_CHART} element={<RatesChartPage/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
);