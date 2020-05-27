import React from 'react';
import style from './style.module.css';
import SquareAddIcon from './SquareAddIcon.png';
import {NavLink} from "react-router-dom";

const IdeasPanel = () => {
    return (
            <div className = {style.ideasPanel}>
               <div className = {style.sortButton}>
                   По дате добавления
               </div>
               <div className = {style.ideasCounter}>
                    Всего идей: +
               </div>
            </div>
    )
}

export default IdeasPanel;