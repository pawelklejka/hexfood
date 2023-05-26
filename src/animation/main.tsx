import gsap from 'gsap'

export const onClickMoveBlob = () => {
    gsap.to(
      '.blob',
      {
        top: '-10vw',
        ease: 'power3',
      }
    )
  }