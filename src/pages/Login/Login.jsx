import React from 'react';
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {loginAccount} from "../../redux/reducers/user";

const Login = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onTouched' })

    const registerUser = (data) => {
        axios.post('/login', data)
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
                        <h1 className='register__form-title'>Вход в аккаунт</h1>
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
                        <Link className='register__form-text' to={'/register'}>Создать аккаунт?</Link>
                        <button className='register__form-btn' type='submit'>Войти</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Login;