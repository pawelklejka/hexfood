import { ReactElement } from 'react'
import { DishType, ErrorResponse } from '../../../commons/types/types'
import PizzaForm from '../SpecificDishForm/PizzaForm'
import SandwichForm from '../SpecificDishForm/SandwichForm'
import SoupForm from '../SpecificDishForm/SoupForm'

export class SpecificFormFactory {
    static createObject(dishType: DishType | string, apiError: ErrorResponse): ReactElement {
        if (dishType === DishType.PIZZA) {
            return <PizzaForm apiError={apiError}/>
        } 
        if (dishType === DishType.SOUP) {
            return <SoupForm apiError={apiError}/>
        } 
        if (dishType === DishType.SANDWICH) {
            return <SandwichForm apiError={apiError}/>
        }
        return <h1>something went wrong with rendering form</h1>
    }
}