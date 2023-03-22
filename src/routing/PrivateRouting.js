import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Iphone from "../pages/Iphone/Iphone";
import Basket from "../pages/Basket/Basket";
import Favorite from "../pages/Favorite/Favorite";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllPhone from "../pages/AllPhone/AllPhone";
const PrivateRouting = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'iphone'} element={<Iphone/>}/>
                <Route path={'allPhone'} element={<AllPhone/>}/>
                <Route path={'basket'} element={<Basket/>}/>
                <Route path={'favorite'} element={<Favorite/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default PrivateRouting;