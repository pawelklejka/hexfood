import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import pizzaImage from '../../../public/assets/image/pizza.png'
import SideSection from './SideSection/SideSection'
import Link from 'next/link'
import {onClickMoveBlob} from '../../animation/main'

function Main() {
  return (
    <div className='container'>
        <div className='flex main-container side-margin'>
            <HeroSection />
            <Link href={'/form'} className="primary-button" onClick={onClickMoveBlob} data-cy="order-now-button">
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