import React, { ChangeEvent, useState } from 'react'
import SideSection from '../Main/SideSection/SideSection';
import pizzaImage from '../../../public/assets/image/pizza.png'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import axios from '../../api/apiClient';
import { SpecificFormFactory } from './SpecificFormFactory/SpecificFormFactory';
import Button from '../commons/Button/Button';

export default function Form() {
    const [specificDishForm, setSpecificDishForm] = useState<DishType | string>(DishType.PIZZA)
    const methods = useForm<FoodInput>({shouldUnregister: true});
    const { register, formState: {errors}, handleSubmit } = methods;

    const onSubmit: SubmitHandler<FoodInput> = data => {
        console.log(data);
        
        axios.post<FoodInput>('', data )
        .then(res => console.log(res))
        .catch(error => console.log(error))
    };
  
    let dishForm = SpecificFormFactory.createObject(specificDishForm)

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
            setSpecificDishForm(event.target.value)
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
                <label>Preparation time</label>
                <input {...register("preparation_time", {required: true, pattern: /^(?:1[0-2]|0[0-9]):[0-5][0-9]:[0-5][0-9]$/})} type="time" step="1"/>
                {errors?.preparation_time?.type === "required" && <p className='invalid-message'>This field is required</p>}
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
            <SideSection src={pizzaImage} />
        </div>
    </div>
  )
}

export enum DishType{
    PIZZA = "pizza",
    SOUP = "soup",
    SANDWICH = "sandwich"
}

interface FormInput{
    name: string,
    preparation_time: string,
    type: DishType
}

interface PizzaFormInput extends FormInput{
    no_of_slices: number,
    diameter: number
}

interface SoupFormInput extends FormInput{
    spiciness_scale: number
}

interface SandwichFormInput extends FormInput{
    slices_of_bread: number
}

export type FoodInput = PizzaFormInput | SoupFormInput | SandwichFormInput