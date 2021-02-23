import pearegrineDesktop from './pearegrine_desktop_1.png'
import pearegrineMobile from './pearegrine_mobile_1.png'
import pearegrineMobileMenu from './pearegrine_mobile_2.png'

interface IImages {
  desktopImages: IImage[],
  mobileImages: IImage[]
}

export interface IImage {
  src: string
  alt: string
}

const pearegrine: IImages = {
  desktopImages: [
    {
      src: pearegrineDesktop,
      alt: 'pearegrine desktop example',
    }
  ],
  mobileImages: [
    {
      src: pearegrineMobile,
      alt: 'pearegrine mobile example',
    },
    {
      src: pearegrineMobileMenu,
      alt: 'pearegrine mobile menu example',
    } 
  ]
}

export const images = {
  pearegrine
}
