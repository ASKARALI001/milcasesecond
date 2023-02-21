import React from 'react';
import Iphone__title from "../../../components/Iphone__title/Iphone__title";

const IphoneMenu = () => {
    return (
        <section className='iphone__menu'>
            <div className="container">
                <ul className='iphone__menu-item'>
                    <li className='iphone__menu-list active'>
                        Силиконовые <br/> чехлы
                    </li>
                    <li className='iphone__menu-list'>
                        Противоударные <br/> чехлы
                    </li>
                    <li className='iphone__menu-list'>
                        Противоударные <br/> чехлы
                    </li>
                    <li className='iphone__menu-list'>
                        Эко <br/> чехлы
                    </li>
                    <li className='iphone__menu-list'>
                        Premium <br/> чехлы
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default IphoneMenu;