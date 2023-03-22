import React from 'react';
import Basket__card from '../../assets/image/iphone1.jpg'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
const BasketCard = () => {
    return (
        <div className='basket__card'>
            <div className='basket__card-info'>
               <div className="basket__card-image">
                   <img src={Basket__card} alt=""/>
               </div>
                <p className="basket__card-desc">
                    Силиконовый сиреневый чехол Soft Touch для iPhone X/XS
                </p>
            </div>
            <div className='basket__card-quantity'>
                <FaMinus className='basket__card-icon'/>
                <span className='basket__card-quanti'> 1 </span>
                <BiPlusMedical className='basket__card-icon'/>
            </div>
            <div className='basket__card-text'>
                <p className='basket__card-price'>
                    540com
                </p>
                <MdDelete className='basket__card-icons'/>
            </div>

        </div>
    );
};

export default BasketCard;