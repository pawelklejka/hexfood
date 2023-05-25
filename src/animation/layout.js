import gsap from 'gsap'

export const onPageEnter = () => {
    gsap.fromTo(
      '.layout-animation',
      {
        y: 50,
        autoAlpha: 0,
        ease: 'power3',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
      }
    )
  }

export const onPageExit = () => {
    gsap.fromTo(
      '.layout-animation',
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power3.out',
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      }
    )
  }