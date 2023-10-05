import './styles.css';
import React from "react";
import {PageDescriptionProps} from '../model/types'

export const PageDescription: React.FC<PageDescriptionProps> = ({text}) => {
    return (
        <div className="page-description">{text}</div>
    );
};