import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/home/Home";
import LayOut from "../components/layout";
import Error from "../pages/error/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<Navigate to='/error'/>}/>
                <Route path='/error' element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;