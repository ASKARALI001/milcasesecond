import React from 'react';
import Slider from "./Slider/Slider";
import AllProducts from "./AllProducts/AllProducts";
import Video from "./Video/Video";
import Products from "../../components/Products/Products";
import Delivery from "./Delivery/Delivery";
import Accessories from "./Accessories/Accessories";
import HomeCommit from "./HomeCommit/HomeCommit";


const Home = () => {
    return (
        <main className='main'>
            <Slider/>
            <AllProducts/>
            <Video/>
            <Products title='ХИТЫ ПРОДАЖ'/>
            <Products title='ВСЕ ПРОДУКТЫ'/>
            <Delivery/>
            <Products title='ПОПУЛЯРНЫЕ АКСЕССУАРЫ'/>
            <HomeCommit/>

        </main>
    );
};

export default Home;