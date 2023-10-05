import './styles.css';
import React from "react";
import {PageDescriptionProps} from '../model/types'

export const PageDescription: React.FC<PageDescriptionProps> = ({children}) => {
    return (
        <div className="page-description">{children}</div>
    );
};