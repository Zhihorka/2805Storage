import React from 'react';
import style from './style.module.css';
import ImageIcon from './ImageIcon.png';
import PreviewImage1 from './SampleImage1.png';
import PreviewImage2 from './SampleImage2.png';


import {NavLink} from "react-router-dom";

const AddImage = () => {
    return (
            <div className = {style.addImage}>
                <div className = {style.imageMiniatures}>
                    <img src = {PreviewImage1}/>
                    <img src = {PreviewImage2}/>
                    <div className = {style.addImageButton}>
                    <img src = {ImageIcon}/>
                    <p>Загрузить <br />
                    изображение</p>
                    </div>
                </div>
            </div>
    )
}

export default AddImage;