import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props{
  src: string | StaticImageData
}

function SideSection(props: Props) {
  return (
    <Image src={props.src} height={250} alt="food image" />
  )
}

export default SideSection