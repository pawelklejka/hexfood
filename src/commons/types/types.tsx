export enum DishType{
    PIZZA = "pizza",
    SOUP = "soup",
    SANDWICH = "sandwich"
}

export interface FormInput{
    name: string,
    preparation_time: string,
    type: DishType
}

export interface PizzaFormInput extends FormInput{
    no_of_slices: number,
    diameter: number
}

export interface SoupFormInput extends FormInput{
    spiciness_scale: number
}

export interface SandwichFormInput extends FormInput{
    slices_of_bread: number
}

export type FoodInput = PizzaFormInput | SoupFormInput | SandwichFormInput

export interface ErrorResponse{
    name?: Array<String>,
    preparation_time?: Array<String>,
    type?: Array<String>
    no_of_slices?: Array<String>,
    diameter?: Array<String>
    spiciness_scale?: Array<String>
    slices_of_bread?: Array<String>
}

export interface SpecificDishFormProps{
    apiError: ErrorResponse
}