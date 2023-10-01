import React, {FC, lazy} from "react";

import {ROUTE_CONSTANTS} from "@/shared/config";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"))
const ConverterPage = lazy(() => import("./ConverterPage"))
const RatesChartPage = lazy(() => import("./RatesChartPage"));

export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} element={
                <React.Suspense fallback={<>Загрузка...</>}>
                    <HomePage/>
                </React.Suspense>
            }/>
            <Route path={ROUTE_CONSTANTS.CONVERTER} element={
                <React.Suspense fallback={<>Загрузка...</>}>
                    <ConverterPage/>
                </React.Suspense>}
            />
            <Route path={ROUTE_CONSTANTS.RATES_CHART} element={
                <React.Suspense fallback={<>Загрузка...</>}>
                    <RatesChartPage/>
                </React.Suspense>}
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
);