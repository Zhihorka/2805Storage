import React,{useState, useEffect} from 'react';
import style from './style.module.css';
import LikeIcon from './LikeIcon.png';
import MessagesIcon from './MessagesIcon.png';
import PersonIcon from './PersonIcon.png';

const IdeasItem = (props) => {
  const [likesCount,setLikes] = useState(props.likesCount)
  const [commentsCount,setCommentsCount] = useState(props.commentsCount)

  useEffect(()=>{
    document.title = `У того кого вы лайкнули последним  сейчас ${likesCount} лайков`
  });


  return (
    <div className={style.item}>
      <div className={style.ideaIcon}>
      <img src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/tree.png' />
      </div>
       <div className={style.text}>
        {props.message}
        </div>
        <div className={style.author}>
        <img src = {PersonIcon}/>
         {props.author}
        </div>
          <div className={style.likeCount}>
          <img src = {LikeIcon}/>
         {likesCount}
        <button onClick={()=> setLikes(likesCount+1)}></button>
      </div>
      <div className={style.commentsCount}>
      <img src = {MessagesIcon}/>
      {commentsCount}
      </div>
    </div>
  )
}

export default IdeasItem;