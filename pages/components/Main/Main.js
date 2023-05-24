import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Button from '../commons/Button/Button'
import Image from 'next/image'
import pizzaImage from '../../../public/assets/image/pizza.png'
import SideSection from '../Main/SideSection/SideSection'
import {NavLink} from 'react-router-dom'
import Link from 'next/link'

function Main() {
  return (
    <div className='container'>
        <div className='flex main-container side-margin'>
            <HeroSection />
            <Link href={'/form'}>
                <Button buttonText='Order now'/>
            </Link>
        </div>
        <div className='flex side-container'>
            <SideSection src={pizzaImage} />
        </div>
    </div>

  )
}

export default Main