import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSubCategory, getProducts} from "../../../redux/reducers/products";
import Card from "../../../components/Card/Card";
import {useNavigate} from "react-router-dom";
const dataCategory = [
    {
        category: "ПЛАСТИКОВЫЕ ЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/0e/0ea82e0d7f058be7a31c9aa256d9cdb9.png.webp",
    },
    {
        category: "СИЛИКОНОВЫЕ ЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/2f/2f68b10ef45ba8c2db5c4c2ada5ed056.png.webp" ,

    },{
        category: "ЧЕХЛЫ PREMIUM" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/12/1286f53913a83681fe16bfb70a7bc447.png.webp" ,

    },{
        category: "ЧЕХЛЫ КНИЖКИ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/71/7195fe1c0332d289b91adc6a20a9c6d9.png.webp" ,
    },{
        category: "ЖИДКИЕ ЧЕХЛЫ С БЛЕСТКАМИ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/45/45df2bdab5875f8f0602a1e344e1f15b.png.webp" ,
    },{
        category: "МАТОВЫЕ СИЛИКОНОВЫЕ ЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/07/070ed2266b8f319dcd0c41c1724c2a9a.png.webp" ,
    },{
        category: "ПРОТИВОУДАРНЫЕ ЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/5b/5b45d1663cd46d57d9340a10be9620cc.png.webp" ,
    },{
        category: "ЖИДКИЕ НЕОНОВЫЕ ЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/50/50aad0c6ca99b259ceae2b87aeac133c.png.webp" ,
    },{
        category: "ЭКО\nЧЕХЛЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/cb/cbdfc7c2318e3648bc7f36019a858dea.png.webp" ,
    },{
        category: "ЧЕХЛЫ ДЛЯ AIRPODS" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/58/58846a497dd89a410c8e97c64cb03f16.png.webp" ,
    },{
        category: "СТЕКЛА" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/5a/5ae1b1e801f04e087caa5f8c8a96350a.png.webp" ,
    },{
        category: "АККУМУЛЯТОРЫ" ,
        subCategory: "https://case-place.ru/core/assets/thumbnails/72/72fbde7b1d08862fb52a3379b28c8868.png.webp" ,
    },



]

const AllProducts = () => {


    const  {  filter }  = useSelector((store) => store.persistedReducer.products)
    const [category, setCategory] = useState(filter.subCategory || '')
    const handleChange = (val) => {
        setCategory(val)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeSubCategory(category))
    },[category])


    const navigate = useNavigate()
    return (
        <section className='all-products'>
            <div className="container">
                <div className="all-products__content">
                    {
                        dataCategory.map((category) => (
                            <Card onClick={() =>{
                                setCategory(category.category)
                            }}  key={category.id} category={category}/>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default AllProducts;