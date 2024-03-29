import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const NotFound = () => {

    const {user} = useSelector((store) => store.persistedReducer.user)

    if (!user.name.length){
        return (
            <Navigate to={'/login'}/>
        );
    }

    return (
            <Navigate to={'/'}/>
    );
};

export default NotFound;