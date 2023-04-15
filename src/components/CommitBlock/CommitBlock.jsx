import React from 'react';
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";

const CommitBlock = ({setShow, show}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm({
        mode: 'onBlur'
    })


    const onSubmit = (data) => {
      axios.post('/commit',{
          ...data,
      })
          .then(({data}) =>{
              alert('otpravlens')
              reset()
          }).catch((err) => alert('ne otprdkk'))
    }
    const exitCommit = (e) => {
        if(e.target.classList.contains('commit__center') || (e.target.classList.contains('register__form-btn'))){
            setShow(false)
        }
    }



    return (
        <div onClick={exitCommit} className='commit__center' style={{display : show ? 'flex' : 'none' }}>
            <div className='commit__block'>
                <h2 className='commit__title'>Оставте свой отзыв</h2>
                <form className='commit__form' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('user', {
                        required: true
                    })}  placeholder={'Name'} className='commit__form-field' type="text"/>
                    <span>{errors.user && <span>Имя обязательно заполнению</span>}</span>
                    <input {...register('image', {
                        required: true
                    })} placeholder={'Photo'} className='commit__form-field' type="text"/>
                    <span>{errors.image && <span>Фото обязательно заполнению</span>}</span>
                    <textarea {...register('text', {
                        required: true
                    })} placeholder={'Text'} className='commit__form-field commit__form-textarea'/>
                    <button  className='register__form-btn' type='submit'>Отправить</button>
                </form>

            </div>
        </div>
    );
};

export default CommitBlock;