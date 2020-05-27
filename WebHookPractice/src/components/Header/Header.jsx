import React from 'react';
import style from './style.module.css';
import OtmetkyLable from '../OtmetkyLable/OtmetkyLable';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = (props) => {
    return (
    <header className={style.header}>
        <OtmetkyLable/>
        <HeaderMenu userName = {props.userName}/>
    </header>)
}

export default Header;