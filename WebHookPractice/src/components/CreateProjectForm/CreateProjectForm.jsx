import React from 'react';
import style from './style.module.css';
import {NavLink} from "react-router-dom";

const CreateProjectForm = () => {
    return (
            <div className = {style.CreateProjectForm}>
                <p>Назовите ваш проект</p>
                <input type="text" id="projectName" name="projectName"/>
                <p>Выберитее категорию</p>
                <select id="Category">
                    <option value="Велодорожки">Велодорожки</option>
                    <option value="Озеленение">Озеленение</option>
                    <option value="Застройка">Застройка</option>
                </select>
                <p>Добавить описание</p>
                <textarea type="text" id="description" name="description" cols="40" rows="5"/>
            </div>
    )
}

export default CreateProjectForm;