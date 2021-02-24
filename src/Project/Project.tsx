import { IProject } from './projectData'
import { v4 as uuidv4 } from 'uuid'

export default function Project({name, theme, links, info, desktopImages, mobileImages }: IProject) {
  const renderDesktopImages = () => {
    if (desktopImages) {
      return desktopImages.map(image => {
        return (
          <div key={image.alt} className='project-image desktop-image'>
            <img src={image.src} alt={image.alt} />
          </div>
        )
      })
    }
  }

  const renderMobileImages = () => {
    if (mobileImages) {
      return mobileImages.map(image => {
        return (
          <div key={image.alt} className='project-image mobile-image'>
            <img src={image.src} alt={image.alt} />
          </div>
        )
      })
    }
  }

  const renderInfo = () => {
    if (info) {
      return (
        <div className='project-info-container'>
          {info.map(i => {
            return <p key={uuidv4()} className='info-paragraph'>{i}</p>
          })}
        </div>
      )
    }
  }

  return (
    <section className={`${theme} region project-container`}>
      <h2 className='project-header'>
        <a href={links.liveSite} target='blank'>{name}</a>
      </h2>
      {renderInfo()}
      <div className='images-container'>
        <div className='desktop-images-container'>
          {renderDesktopImages()}
        </div>
        <div className='mobile-images-container'>
          {renderMobileImages()}
        </div>
      </div>
      <div className='project-links '>
        <div className='link-border'>
          <a className='project-link drop-shadow' href={links.liveSite} target='blank'>Live Site</a>
        </div>
        <div className='link-border'>
          <a className='project-link drop-shadow' href={links.githubClient} target='blank'>Github Client</a>
        </div>
        {links.githubServer &&
          <div className='link-border'>
            <a className='project-link drop-shadow' href={links.githubServer} target='blank'>Github Server</a>
          </div>
        }
      </div>
    </section>
  )
}