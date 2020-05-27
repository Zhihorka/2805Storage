import React from 'react';
import style from './style.module.css';
import OverviewHeader from '../OverviewHeader/OverviewHeader';
import Ideas from '../Ideas/Ideas';
import {NavLink, BrowserRouter, Route} from "react-router-dom";

const Overview = () => {
    return (
        <BrowserRouter>
            <div className = {style.wrapper}>
                <OverviewHeader/>
                <Ideas/>
            </div>
        </BrowserRouter>
    )
}

export default Overview;