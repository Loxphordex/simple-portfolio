import { images, IImage } from '../images/imageStore'
import { info } from '../info/info'

export interface IProject {
  name: string
  theme: string
  links: { liveSite: string, githubClient: string, githubServer?: string }
  info?: string[]
  desktopImages?: IImage[]
  mobileImages?: IImage[]
  otherImages?: IImage[]
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'light',
  links: {
    liveSite: 'https://pearegrine.com/gallery/all?page=1',
    githubClient: 'https://github.com/Loxphordex/k-client',
    githubServer: 'https://github.com/Loxphordex/k-server'
  },
  info: info.pearegrine,
  desktopImages: images.pearegrine.desktopImages,
  mobileImages: images.pearegrine.mobileImages,
  otherImages: images.pearegrine.other

}

const memoryField: IProject = {
  name: 'MemoryField',
  theme: 'light',
  links: {
    liveSite: 'https://memoryfield.now.sh/',
    githubClient: 'https://github.com/Loxphordex/Memoryfield'
  },
  info: info.memoryField,
}

export const dataList = [
  pearegrine,
  memoryField
]
