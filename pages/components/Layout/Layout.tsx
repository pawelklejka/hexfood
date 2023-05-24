import Header from '../Header/Header'
import Blob from '../commons/Blob/Blob'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function Layout({children}: Props) {
  return (
    <>
        <Blob />
        <Header />
        {children}
    </>
  )
}

export default Layout