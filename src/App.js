import '../src/style/sytle.scss'
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Iphone from "./pages/Iphone/Iphone";
import AllPhone from "./pages/AllPhone/AllPhone";
import Basket from "./pages/Basket/Basket";
import IphoneBlock from "./pages/Iphone/IphoneBlock/IphoneBlock";
import Favorite from "./pages/Favorite/Favorite";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import React from "react";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import {email} from "react-admin";
import NotFound from "./pages/NotFound/NotFound";

function App() {

    const {user} = useSelector((store) => store.persistedReducer.user)
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'iphone'} element={<Iphone/>}/>
                <Route path={'allPhone'} element={<AllPhone/>}/>
                <Route path={'basket'} element={<Basket/>}/>
                <Route path={'iphoneBlock/:id'} element={<IphoneBlock/>}/>
                <Route path={'favorite'} element={<Favorite/>}/>
                {user.email === 'askar@mail.ru' ? <Route path={'/*'} element={<AdminPanel/>}/> : ''}
            </Route>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'notFound'} element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
