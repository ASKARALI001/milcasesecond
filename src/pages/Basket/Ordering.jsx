import React from 'react';
import InputMask from 'react-input-mask'
import {useForm} from "react-hook-form";
import {useState}  from "react";
import axios from "../../utils/axios";
import {useSelector, useDispatch} from "react-redux";
import {resetBasket} from "../../redux/reducers/addFavorite";

const Ordering = () => {
    const { basket } = useSelector((store) => store.persistedReducer.addFavorite)
    const {
        register,
        watch,
        handleSubmit,
        formState : {
            errors
        },
        reset
    } = useForm ({
        mode: "onBlur"
    })
    const dispatch = useDispatch()

    const [changeAddress,setChangeAddress] = useState('')
    const [address,setAddress] = useState(false)
    const onSubmit = (data) => {
        axios.post('/orders', {
            ...data,
            data: basket.data,
            allPrice: basket.data.reduce((acc, res) =>{
                return acc + res.price * res.count
            }, 0)
        }).then(({data}) => {
            alert('ok')
            reset()
            dispatch(resetBasket())
        })
            .catch((err) => alert('err'))
    }


    return (
        <div>
            <form noValidate className="ordering__form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', {
                    required: {
                        message: 'Имя обязательно к заполнению',
                        value: true
                    },
                    minLength: {
                        message: 'Минимум 2 символа',
                        value: 2
                    }

                })} className='ordering__form-field' type="text" placeholder='Максат'/>
                <span>{errors.name && errors.name?.message } </span>


                <input {...register('surname' ,{
                    required: {
                        message: 'Имя обязательно к заполнению',
                        value: true
                    },
                    minLength: {
                        message: 'Минимум 2 символа',
                        value: 2
                    }

                })} className='ordering__form-field' type="text" placeholder='Биримкулов'/>
                <span>{errors.surname && <span>Имя обязательно к заполнению</span>}</span>

                <input  {...register('email',{
                    required: {
                        message: 'Имя обязательно к заполнению',
                        value: true
                    },
                    minLength: {
                        message: 'Минимум 10 символа',
                        value: 10
                    },
                    pattern: {
                        message: 'Напишите правильно свой email',
                        value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                    }

                })} className='ordering__form-field' type="email" placeholder='maksat007@gmail.com'/>
                <span>{errors.email && errors.email?.message}</span>

                <InputMask
                    mask={`+\\9\\96(999)99-99-99`}
                    {...register('phone',{
                    required: true,
                    pattern: {
                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                        message: 'Заполните номер телефона',
                    },
                })} className='ordering__form-field' type="tel" placeholder='+996 999 790 615'/>
                <span>{errors.phone && <span>Имя обязательно к заполнению</span>}</span>

                <div className="ordering__deli">
                    <h3 className="ordering__deli-title">Доставка</h3>
                    {
                        address? <p> {changeAddress}
                        </p> : <textarea {...register('address',{
                            required: true
                        })} value={changeAddress} onChange={(e) => setChangeAddress(e.target.value)} placeholder="Адрес" className='ordering__deli-area'/>

                    }

                    <p className='ordering__deli-red ' onClick={() => {
                        if(!changeAddress.length && !address){
                            setAddress(false)
                        }else{
                            setAddress(!address)
                        }
                    }}>{address ? 'Редактировать' : 'Сохранить'}</p>
                    <p className='ordering__deli-red'>Получить скидку</p>

                </div>
                <div className='ordering__pay'>
                    <h3 className="ordering__deli-title">Способ оплаты</h3>
                    <label className="ordering__pay-label">
                        <input {...register('pay',{
                            required: true
                        })} value='card' type="radio" name="pay"/>Переводам
                    </label>
                    <label className="ordering__pay-label">
                        <input {...register('pay',{
                            required: true
                        })} value='cash' type="radio" name="pay"/>При получении заказа
                    </label>
                    <span>{errors.pay && <span>Имя обязательно к заполнению</span>}</span>

                </div>
                <button className="ordering__form-btn" type="submit">Заказать</button>
            </form>

        </div>
    );
};

export default Ordering;