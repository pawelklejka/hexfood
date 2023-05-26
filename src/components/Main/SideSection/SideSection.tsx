import React from 'react'
import Image from 'next/image'

interface Props{
  src: string
}

function SideSection(props: Props) {
  return (
    <Image src={props.src} height={250} alt="food image" />
  )
}

export default SideSection