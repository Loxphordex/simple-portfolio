import { images, IImage } from '../images/imageStore'

export interface IProject {
  name: string
  theme: string
  info?: string[]
  desktopImages?: IImage[]
  mobileImages?: IImage[]
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'cream-orange',
  info: [
    'Pearegrine is a clothing company based in New York. I created this website using React and implemented transaction functionality via Stripe API.'
  ],
  desktopImages: images.pearegrine.desktopImages,
  mobileImages: images.pearegrine.mobileImages
}

export const dataList = [
  pearegrine
]
