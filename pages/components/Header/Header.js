import React from 'react'
import logo from "../../../public/assets/svg/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='side-margin'>
        <Link href={'/'}>
          <Image
          className='logo'
          src={logo}
          alt="hexfood logo"
          />
        </Link>
    </header>
  )
}
