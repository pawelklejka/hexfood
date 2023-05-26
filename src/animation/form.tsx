import gsap from 'gsap'
import { DishType } from '../commons/types/types'

export const animateColor = (dishType: DishType | string) => {
    if(DishType.PIZZA == dishType || dishType == "pizza"){
        gsap.to(
            ['.blob', 'input', 'select'],
            {
              backgroundColor: "#FFBF69",
              ease: 'power3',
            }
          )
    }
    if(DishType.SOUP == dishType || dishType == "soup") {
        gsap.to(
            ['.blob', 'input', 'select'],
            {
              backgroundColor: "#9CBD55",
              ease: 'power3',
            }
          )
    }
    if(DishType.SANDWICH == dishType || dishType == "sandwich"){
        gsap.to(
            ['.blob', 'input', 'select'],
            {
              backgroundColor: "#55acbd",
              ease: 'power3',
            }
          )
    }
}