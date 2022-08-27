import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AllNews from "../pages/AllNews/AllNews";
import News from "../pages/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='news' element={<AllNews />}/>
                <Route path='news/:id' element={<News />}/>
                <Route path='*' element={<Navigate to='/error'/>}/>
                <Route path='/error' element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;