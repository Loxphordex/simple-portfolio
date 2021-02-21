import images from '../images/imageStore'

export interface IProject {
  name: string
  theme: string
  images?: string[]
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'dark',
  images: images.pearegrine
}

export const dataList = [
  pearegrine
]
