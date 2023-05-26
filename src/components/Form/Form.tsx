import React, { ChangeEvent, useState } from 'react'
import SideSection from '../Main/SideSection/SideSection';
import pizzaImage from '../../../public/assets/image/pizza.png'
import soupImage from '../../../public/assets/image/soup.png'
import sandwichImage from '../../../public/assets/image/sandwich.png'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import axios from '../../api/apiClient';
import { SpecificFormFactory } from './SpecificFormFactory/SpecificFormFactory';
import Button from '../../commons/components/Button/Button';
import { animateColor } from '@/src/animation/form';
import { StaticImageData } from 'next/image';
import { DishType, ErrorResponse, FoodInput } from '../../commons/types/types';
import { useRouter } from 'next/router';

export default function Form() {
    const [specificDishForm, setSpecificDishForm] = useState<DishType | string>(DishType.PIZZA)
    const [imageSrc, setImageSrc] = useState<StaticImageData>(pizzaImage)
    const [apiError, setApiError] = useState<ErrorResponse>({});
    const router = useRouter()
    const methods = useForm<FoodInput>({shouldUnregister: true});
    const { register, formState: {errors}, handleSubmit } = methods;

    const onSubmit: SubmitHandler<FoodInput> = data => {        
        axios.post<FoodInput>('', data )
        .then(res => {
            setTimeout(() => {
                router.push("/")
            }, 3000)
        })
        .catch(error => {
            console.log(error.response.data)
            setApiError(error.response.data)
        })
    };
  
    let dishForm = SpecificFormFactory.createObject(specificDishForm, apiError)

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
            setSpecificDishForm(event.target.value)
            animateColor(event.target.value)
            changeImgHandler(event.target.value)
    }

    const changeImgHandler = (dishtype: string) => {
        if(dishtype == "pizza") setImageSrc(pizzaImage)
        if(dishtype == "soup") setImageSrc(soupImage)
        if(dishtype == "sandwich") setImageSrc(sandwichImage)
        
    }

    return (

    <div className='container'>
        <div className='flex main-container side-margin'>
            <h1>Your order form</h1>
            <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
                <label>Name</label>
                <input {...register("name", {required: true})} />
                {errors?.name?.type === "required" && <p className='invalid-message'>This field is required</p>}
                {apiError?.name && <p className='invalid-message'>{apiError.name[0]}</p>}
                <label>Preparation time</label>
                <input {...register("preparation_time", {required: true, pattern: /^(?:1[0-2]|0[0-9]):[0-5][0-9]:[0-5][0-9]$/})} type="time" step="1"/>
                {errors?.preparation_time?.type === "required" && <p className='invalid-message'>This field is required</p>}
                {apiError?.preparation_time && <p className='invalid-message'>{apiError.preparation_time[0]}</p>}
                <label>Dish type</label>
                <select id="dishType" {...register("type", {required: true})} onChange={e => onChangeHandler(e)}>
                    <option value={DishType.PIZZA}>pizza</option>
                    <option value={DishType.SOUP}>soup</option>
                    <option value={DishType.SANDWICH}>sandwich</option>
                </select>
                {dishForm}
                <Button type="submit" buttonText='Send Order'/>
            </form>
            </FormProvider>
    
        </div>
        <div className='flex side-container side-margin'>
            <SideSection src={imageSrc} />
        </div>
    </div>
  )
}

