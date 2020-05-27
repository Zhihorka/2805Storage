import React from 'react';
import style from './style.module.css';
import SquareAddIcon from './SquareAddIcon.png';
import {NavLink} from "react-router-dom";

const OverviewHeader = () => {
    return (
            <div className = {style.OverviewHeader}>
                <div className = {style.ideasFolder}>
                    Идеи
                </div>
                <div className = {style.statisticFolder}>
                Статистика
                </div>
                <div className = {style.feedFolder}>
                 Лента
                </div>
            </div>
    )
}

export default OverviewHeader;