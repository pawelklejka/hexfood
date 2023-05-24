import React from 'react'
import Image from 'next/image'

function SideSection(props) {
  return (
    <Image src={props.src} height={250} />
  )
}

export default SideSection