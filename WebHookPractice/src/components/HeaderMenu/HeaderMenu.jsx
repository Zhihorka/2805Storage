import React from 'react';
import style from './style.module.css';
import AddIcon from './AddIcon.png';
import DropDownIcon from './DropDownIcon.png';

const HeaderMenu = (props) => {
    return (
    <div className={style.headerMenu}>
        <img src ={AddIcon}/>
        <p>Новый проект</p>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/480px-Emoji_u1f44b.svg.png'/>
         <p>Привет, {props.userName}</p>
         <img src ={DropDownIcon} className ='DropDownIcon'/>
         
    </div>
    )
}

export default HeaderMenu;