import React, {FC, lazy} from "react";

import {ROUTE_CONSTANTS} from "@/shared/config";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {Layout} from "@/widgets/Layout/";
const HomePage = lazy(() => import("./HomePage"))
const ConverterPage = lazy(() => import("./ConverterPage"))
const RatesChartPage = lazy(() => import("./RatesChartPage"));

export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} element={<Layout/>}>
                <Route index element={
                    <React.Suspense fallback={<p>Загрузка...</p>}>
                        <HomePage/>
                    </React.Suspense>
                }/>
                <Route path={ROUTE_CONSTANTS.CONVERTER} element={
                    <React.Suspense fallback={<p>Загрузка...</p>}>
                        <ConverterPage/>
                    </React.Suspense>}
                />
                <Route path={ROUTE_CONSTANTS.RATES_CHART} element={
                    <React.Suspense fallback={<p>Загрузка...</p>}>
                        <RatesChartPage/>
                    </React.Suspense>}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </BrowserRouter>
);