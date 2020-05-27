import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Route render = {() => <Header userName = {props.userName}/>}/>
                <Route render = {() => <Overview/>}/>
            </div>
        </BrowserRouter>)
}

export default App;