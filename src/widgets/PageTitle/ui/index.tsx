import './styles.css';
import React from "react";

type TPageTitleProps = {
    title: string;
}

export const PageTitle: React.FC<TPageTitleProps> = ({title}) => {
    return (
        <h1 className="page-title">{title}</h1>
    );
};