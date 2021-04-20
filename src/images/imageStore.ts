// Pearegrine imports
import pearLogo from './pearegrineLogo.png'
import pearegrineDesktop from './pearegrine_desktop_1.png'
import pearegrineMobile from './pearegrine_mobile_1.png'
import pearegrineMobileMenu from './pearegrine_mobile_2.png'
import grayBlockTee from './gray-block-tee.jpg'

// Memoryfield imports
import memoryLogo from './MFTemp.jpg'

interface IImages {
  logoImage?: IImage
  desktopImages?: IImage[]
  mobileImages?: IImage[]
  other?: IImage[]
}

export interface IImage {
  src: string
  alt: string
}

const pearegrine: IImages = {
  logoImage: {
    src: pearLogo,
    alt: 'Pearegrine Logo'
  },
  desktopImages: [
    {
      src: pearegrineDesktop,
      alt: 'pearegrine desktop example',
    },
    {
      src: grayBlockTee,
      alt: 'gray block tee shirt'
    }
  ],
  mobileImages: [
    {
      src: pearegrineMobile,
      alt: 'pearegrine mobile example',
    },
    {
      src: pearegrineMobileMenu,
      alt: 'pearegrine mobile menu',
    } 
  ]
}

const memoryfield: IImages = {
  logoImage: {
    src: memoryLogo,
    alt: 'Memory field logo'
  }
}

export const images = {
  pearegrine,
  memoryfield
}
