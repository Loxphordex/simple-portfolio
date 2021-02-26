import { images, IImage } from '../images/imageStore'

export interface IProject {
  name: string
  theme: string
  links: { liveSite: string, githubClient: string, githubServer?: string }
  info?: string[]
  desktopImages?: IImage[]
  mobileImages?: IImage[]
}

const pearegrine: IProject = {
  name: 'Pearegrine',
  theme: 'cream-orange',
  links: {
    liveSite: 'https://pearegrine.com/gallery/all?page=1',
    githubClient: 'https://github.com/Loxphordex/k-client',
    githubServer: 'https://github.com/Loxphordex/k-server'
  },
  info: [
    'Pearegrine is a clothing company based in New York. I created this website using React and implemented transaction functionality via Stripe API.'
  ],
  desktopImages: images.pearegrine.desktopImages,
  mobileImages: images.pearegrine.mobileImages
}

const memoryField: IProject = {
  name: 'MemoryField',
  theme: 'light',
  links: {
    liveSite: '',
    githubClient: 'https://github.com/Loxphordex/Memoryfield'
  },
  info: [
    'This is a musical sequencer created using React and the JavaScript Web Audio API.',
    'It originated as a memorization game like Simon Says. After reworking the project to generate sound, it mutated into a programmable musical instrument.',
    '(Still a WIP)'
  ],
}

export const dataList = [
  pearegrine,
  memoryField
]
