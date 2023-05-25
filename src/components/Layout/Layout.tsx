import Header from '../Header/Header'
import Blob from '../commons/Blob/Blob'
import { ReactNode } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useRouter } from 'next/router'
import {onPageEnter, onPageExit} from '../../../src/animation/layout'

interface Props {
  children?: ReactNode
}

function Layout({children}: Props) {
  const router = useRouter()

  return (
    <>
        <Blob />
        <Header />
        <SwitchTransition>
          <Transition  
          key={router.asPath} // our route as a key
          timeout={500}
          in={true}
          onEnter={onPageEnter} // our enter animation
          onExit={onPageExit} // our exit animation
          mountOnEnter={true}
          unmountOnExit={true}>
            <div className="layout-animation">
              {children}
            </div>
          </Transition>
        </SwitchTransition>

    </>
  )
}

export default Layout