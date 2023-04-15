import React from 'react';
import Basket__card from '../../assets/image/iphone1.jpg'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";
import {deleteBasket, minusSetBasket, oneSetBasket} from "../../redux/reducers/addFavorite";
const BasketCard = () => {


    const { basket } = useSelector((store) => store.persistedReducer.addFavorite)


    const dispatch = useDispatch()
    return (
        <>
            {
                basket.data.map((item) => (
                    <div className='basket__card'>
                        <div className='basket__card-info'>
                            <div className="basket__card-image">
                                <img src={item.image[0]} alt=""/>
                            </div>
                            <p className="basket__card-desc">
                                {item.subCategory} для {item.title}
                            </p>
                        </div>
                        <div className='basket__card-row'>
                            <div className='basket__card-quantity'>
                                <FaMinus onClick={() => dispatch(minusSetBasket(item.id))} className='basket__card-icon'/>
                                <span className='basket__card-quanti'> {item.count} </span>
                                <BiPlusMedical onClick={() => dispatch(oneSetBasket(item.id))} className='basket__card-icon'/>
                            </div>
                            <div className='basket__card-text'>
                                <p className='basket__card-price'>
                                    {item.price * item.count} com
                                </p>
                                <MdDelete onClick={() => dispatch(deleteBasket(item.id))} className='basket__card-icons'/>
                            </div>
                        </div>

                    </div>
                ))
            }
            <h3 className='basket__allPrice'>Итого: {
                basket.data.reduce((acc, res) =>{
                return acc + res.price * res.count
            }, 0)
            }</h3>
        </>
    );
};

export default BasketCard;