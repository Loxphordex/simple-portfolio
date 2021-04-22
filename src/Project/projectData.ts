import { images, IImage } from '../images/imageStore'
import { info } from '../info/info'

export interface IProject {
  name: string
  theme: string
  links: { liveSite: string, githubClient: string, githubServer?: string }
  fadeInKey?: number
  info?: string[]
  logoImage?: IImage
  desktopImages?: IImage[]
  mobileImages?: IImage[]
  otherImages?: IImage[]
  openProject?: string
  setOpenProject?: React.Dispatch<React.SetStateAction<string>>
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'strawberry',
  links: {
    liveSite: 'https://pearegrine.com/gallery/all?page=1',
    githubClient: 'https://github.com/Loxphordex/k-client',
    githubServer: 'https://github.com/Loxphordex/k-server'
  },
  fadeInKey: 0,
  info: info.pearegrine,
  logoImage: images.pearegrine.logoImage,
  desktopImages: images.pearegrine.desktopImages,
  mobileImages: images.pearegrine.mobileImages,
  otherImages: images.pearegrine.other
}

const memoryField: IProject = {
  name: 'MemoryField',
  theme: 'mint',
  links: {
    liveSite: 'https://memoryfield.now.sh/',
    githubClient: 'https://github.com/Loxphordex/Memoryfield'
  },
  fadeInKey: 1,
  info: info.memoryField,
  logoImage: images.memoryfield.logoImage
}

export const dataList = [
  pearegrine,
  memoryField
]
