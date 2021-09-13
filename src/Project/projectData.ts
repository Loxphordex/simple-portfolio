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
  techIcons?: string[]
  setOpenProject?: React.Dispatch<React.SetStateAction<string>>
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'pearBlue',
  links: {
    liveSite: 'https://pearegrine.com',
    githubClient: 'https://github.com/Loxphordex/k-client',
    githubServer: 'https://github.com/Loxphordex/k-server'
  },
  fadeInKey: 0,
  info: info.pearegrine,
  logoImage: images.pearegrine.logoImage,
  desktopImages: images.pearegrine.desktopImages,
  mobileImages: images.pearegrine.mobileImages,
  otherImages: images.pearegrine.other,
  techIcons: [
    'devicon-javascript-plain',
    'devicon-react-original-wordmark',
    'devicon-express-original',
    'devicon-postgresql-plain-wordmark',
    'devicon-heroku-original-wordmark'
  ]
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
  logoImage: images.memoryfield.logoImage,
  desktopImages: images.memoryfield.desktopImages,
  techIcons: [
    'devicon-html5-plain',
    'devicon-css3-plain',
    'devicon-javascript-plain',
    'devicon-heroku-original-wordmark'
  ]
}

export const dataList = [
  pearegrine,
  memoryField
]
