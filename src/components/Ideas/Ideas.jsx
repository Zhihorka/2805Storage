import React from 'react';
import style from './style.module.css';
import IdeasItem from '../IdeasItem/IdeasItem';

const Ideas = (props) => {
    //это типо мы получили после запроса на сервер 
    let items = [
        {id: 1, message: 'Нужно велодорожки',author: 'Никита', likesCount: 12, commentsCount:3},
        {id: 2, message: 'Нужны скамейки',author: 'Надежда', likesCount: 11, commentsCount:4},
        {id: 3, message: 'Нужно подземные парковки',author: 'Борис', likesCount: 11, commentsCount:7},
        {id: 4, message: 'Убрать заборы',author: 'Маргарита', likesCount: 11, commentsCount:2}
    ]

    let ideasElements =
        items.map( p => <IdeasItem message={p.message} author={p.author} likesCount={p.likesCount} commentsCount={p.commentsCount}/>);

    return (
        <div className={style.postsBlock}>
            <div className={style.posts}>
                { ideasElements }
            </div>
        </div>
    )
}

export default Ideas;