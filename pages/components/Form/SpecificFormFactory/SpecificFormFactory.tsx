import { ReactElement } from 'react'
import {DishType, FoodInput} from '../Form'
import PizzaForm from '../SpecificDishForm/PizzaForm'
import SandwichForm from '../SpecificDishForm/SandwichForm'
import SoupForm from '../SpecificDishForm/SoupForm'

export class SpecificFormFactory {
    static createObject(dishType: DishType | string): ReactElement {
        if (dishType === DishType.PIZZA) {
            return <PizzaForm />
        } 
        if (dishType === DishType.SOUP) {
            return <SoupForm />
        } 
        if (dishType === DishType.SANDWICH) {
            return <SandwichForm />
        }

        return <h1>something went wrong with rendering form</h1>
    }
}