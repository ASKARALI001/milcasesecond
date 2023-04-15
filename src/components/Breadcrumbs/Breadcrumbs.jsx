import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {productsClear} from "../../redux/reducers/products";


const Breadcrumbs = () => {
    const {filter} = useSelector((store) => store.persistedReducer.products)

    const location = useLocation()

    const navigate = useNavigate()
    console.log(location.pathname)
    const dispatch = useDispatch()


    return (
        <>
            <div className="container">
                <ul className='breadcrumbs'>
                    <li className='breadcrumbs-item' onClick={() => navigate('/')}>
                        Главная \
                    </li>
                    {
                        location.pathname === '/allPhone' ?  '' : <li className='breadcrumbs-item' onClick={() => {
                            navigate('/allPhone')
                            dispatch(productsClear(filter.subCategory))}}>
                            чехлы {filter.brand} \
                        </li>
                    }
                    {
                        location.pathname === '/allPhone' ? '' : <li className='breadcrumbs-item' onClick={() => navigate('/iphone')}>
                            {filter.subCategory} \</li>
                    }
                    {
                        location.pathname === 'iphoneBlock/:id' ? <li className='breadcrumbs-item'>{filter.title} \</li> : ''
                    }
                </ul>
            </div>
        </>
    );
};

export default Breadcrumbs;