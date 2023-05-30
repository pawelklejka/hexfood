import { DishType, PizzaFormInput, SandwichFormInput, SoupFormInput } from '../../src/commons/types/types'

export const VALID_PIZZA_INPUT: PizzaFormInput = {
    name: "pizza",
    preparation_time: '00:30:00',
    type: DishType.PIZZA,
    no_of_slices: 2,
    diameter: 20
}

export const INVALID_PIZZA_INPUT: PizzaFormInput = {
    name: "pi",
    preparation_time: '',
    type: DishType.PIZZA,
    no_of_slices: 0,
    diameter: 2
}

export const VALID_SOUP_INPUT: SoupFormInput = {
    name: "soup",
    preparation_time: '00:30:00',
    type: DishType.SOUP,
    spiciness_scale: 5
}

export const INVALID_SOUP_INPUT: SoupFormInput = {
    name: "so",
    preparation_time: '',
    type: DishType.SOUP,
    spiciness_scale: 0
}

export const VALID_SANDWICH_INPUT: SandwichFormInput = {
    name: "sandwich",
    preparation_time: '00:30:00',
    type: DishType.SANDWICH,
    slices_of_bread: 2
}

export const INVALID_SANDWICH_INPUT: SandwichFormInput = {
    name: "sah",
    preparation_time: '',
    type: DishType.SANDWICH,
    slices_of_bread: 0
}