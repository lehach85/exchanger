import './styles.css';
import React from "react";
import {TPageTitleProps} from '../model/types'

export const PageTitle: React.FC<TPageTitleProps> = ({title}) => {
    return (
        <h1 className="page-title">{title}</h1>
    );
};