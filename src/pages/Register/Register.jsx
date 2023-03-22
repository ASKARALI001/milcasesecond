import React from 'react';
import InputMask from 'react-input-mask'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import axios from "../../utils/axios";
import {Link, useNavigate} from "react-router-dom";
import {loginAccount} from "../../redux/reducers/user";
const Register = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onTouched' })

    const registerUser = (data) => {
        axios.post('/register', data)
            .then((res) => {
                dispatch(loginAccount({
                    ...res.data.user,
                    token: res.data.accessToken
                }))
                navigate('/')
            }).catch((err) => alert(err))
    }


    return (
        <section className='register'>
            <div className="container">
                <div className="register__content">
                    <form className='register__form' onSubmit={handleSubmit(registerUser)}>
                        <h1 className='register__form-title'>Регистрация</h1>
                        <label className='register__label'>
                            <h2 className='register__label-title'>Имя</h2>
                            <input
                                style={{ border: errors.name && '#f5222d 1px solid' }}
                                {...register('name', {
                                    required: {
                                        message: 'Enter a first name',
                                        value: true,
                                    },
                                    maxLength: {
                                        message: 'Maximum length 20 characters',
                                        value: 20,
                                    },
                                    minLength: {
                                        message: 'Minimum length 3 characters',
                                        value: 3,
                                    },
                                })}
                                className='register__form-field' placeholder='Имя' type="text"/>
                        </label>
                        <label className='register__label'>
                            <h2 className='register__label-title'>E-Mail</h2>
                            <input {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Это поле обязательное',
                                },
                                pattern: {
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                    message: 'Напишите правильна свой Emil',
                                },
                                   })

                                   }
                                   className='register__form-field' placeholder='E-Mail' type="email"/>
                        </label>
                        <label className='register__label'>
                            <h2 className='register__label-title'>Тел</h2>
                            <InputMask
                                mask={`+\\9\\96(999)99-99-99`}
                                type='tel'
                                // style={{ border: errors.phone && '#f5222d 1px solid' }}
                                {...register('phone', {
                                    required: {
                                        value: true,
                                        message: 'Это поле обязательное',
                                    },
                                    pattern: {
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                        message: 'Заполните номер телефона',
                                    },
                                })}
                                className='register__form-field'
                                placeholder='Тел'
                            />
                        </label>
                        <label className='register__label'>
                            <h2 className='register__label-title'>Пароль</h2>
                            <input
                                style={{ border: errors.password && '#f5222d 1px solid' }}
                                {...register('password', {
                                    required: {
                                        message: 'Enter a password',
                                        value: true,
                                    },
                                    maxLength: {
                                        message: 'Maximum length 20 characters',
                                        value: 20,
                                    },
                                    minLength: {
                                        message: 'Minimum length 8 characters',
                                        value: 8,
                                    },
                                    pattern: {
                                        message: 'Enter your password correctly',
                                        value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                                    },
                                })}
                                className='register__form-field' placeholder='Пароль' type="password"/>
                        </label>
                        <Link className='register__form-text'  to="/login">Уменя уже есть аккаунт</Link>
                        <button className='register__form-btn' type='submit'>Продолжить</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Register;