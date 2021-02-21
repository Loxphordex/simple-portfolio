import { IProject } from './projectData'

export default function Project({name, theme, images}: IProject) {
  const renderImages = () => {
    if (images) {
      return images.map(image => {
        return (
          <div key={image} className={`project-image`}>
            <img src={image} alt='project' />
          </div>
        )
      })
    }
  }

  return (
    <section className={`${theme} region project-container`}>
      <h2 className='project-header'>{name}</h2>
      {renderImages()}
    </section>
  )
}