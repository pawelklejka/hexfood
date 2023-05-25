import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import pizzaImage from '../../../public/assets/image/pizza.png'
import SideSection from '../Main/SideSection/SideSection'
import Link from 'next/link'
import {onClickMoveBlob} from '../../../src/animation/main'

function Main() {
  return (
    <div className='container'>
        <div className='flex main-container side-margin'>
            <HeroSection />
            <Link href={'/form'} className="primary-button" onClick={onClickMoveBlob}>
              Order now
            </Link>
        </div>
        <div className='flex side-container'>
            <SideSection src={pizzaImage}/>
        </div>
    </div>

  )
}

export default Main