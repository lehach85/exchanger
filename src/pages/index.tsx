import {FC, Suspense, lazy} from "react";

import {ROUTE_CONSTANTS} from "@/shared/config";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";

import {HomePage} from "./HomePage";
import {ConverterPage} from "./ConverterPage";

export const Router: FC = () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            <Routes>
                <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage/>}/>
                <Route path={ROUTE_CONSTANTS.CONVERTER} element={<ConverterPage/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);