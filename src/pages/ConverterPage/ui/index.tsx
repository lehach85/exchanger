import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {Converter} from "@/entities/Converter";
import React from "react";

export const ConverterPage: React.FC = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Конвертор валют" />
            <Converter/>
        </>
    );
};