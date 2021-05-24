import { IProject } from "./projectData";
import { v4 as uuidv4 } from "uuid";
import { IImage } from "../images/imageStore";

export default function Project({
  name,
  theme,
  links,
  info,
  logoImage,
  desktopImages,
  mobileImages,
  otherImages,
  fadeInKey,
  openProject,
  techIcons,
  setOpenProject
}: IProject) {
  const renderLogo = () => {
    if (logoImage) {
      return (
        <div className="logo-image-container">
          <img src={logoImage.src} alt={logoImage.alt} />
        </div>
      );
    }
  };

  const openCurrentProject = () => {
    if (setOpenProject && name) {
      setOpenProject(name)
    } else {
      console.log('setOpenProject is null')
    }
  }

  const isProjectOpen = (): string => {
    // initial state... no project is selected
    if (!openProject || (openProject && openProject.length <= 0)) {
      return ''
    }

    // current project is open
    else if (openProject && name && openProject === name) {
      return 'open-project'
    }

    // another project is open
    return 'closed-project'
  }

  const renderDesktopImages = () => {
    if (desktopImages) {
      return renderImages(desktopImages, 'project-image desktop-image')
    }
  };

  const renderMobileImages = () => {
    if (mobileImages) {
      return renderImages(mobileImages, 'project-image mobile-image')
    }
  };

  const renderOtherImages = () => {
    if (otherImages) {
      return renderImages(otherImages, 'project-image other-image')
    }
  };

  const renderImages = (images: IImage[], className: string) => {
    return images.map(image => {
      return (
        <div key={image.alt} className={className}>
          <img src={image.src} alt={image.alt} />
        </div>
      )
    })
  }

  const renderInfo = () => {
    if (info) {
      return (
        <div className="project-info-container">
          {info.map((i) => {
            return (
              <p key={uuidv4()} className="info-paragraph">
                {i}
              </p>
            );
          })}
        </div>
      );
    }
  };

  const renderTechIcons = () => {
    if (techIcons) {
      return (
        <div className='tech-icons-container'>
          {techIcons.map(iconClassName => {
            return <i className={iconClassName} />
          })}
        </div>
      )
    }
  }

  return (
    <div
      className={`${theme} region project-container drop-shadow fade-${fadeInKey} ${isProjectOpen()}`}
      onClick={openCurrentProject}
    >
      <div className="display-container">
        <section className="main-display">
          <h2 className="project-header">
            {/* <a href={links.liveSite} target='blank'>{name}</a> */}
            {renderLogo()}
            {renderTechIcons()}
          </h2>
        </section>
        {isProjectOpen() === 'open-project' && 
          <section className='secondary-display'>
            <div className='secondary-main-body'>
              {renderInfo()}
            </div>
            <div className='project-links '>
              <div className='link-border'>
                <a className='project-link live-site-link' href={links.liveSite} target='blank'>Live Site</a>
              </div>
              <div className='link-border'>
                <a className='project-link' href={links.githubClient} target='blank'>Github Client</a>
              </div>
              {links.githubServer &&
                <div className='link-border'>
                  <a className='project-link' href={links.githubServer} target='blank'>Github Server</a>
                </div>
              }
            </div>
            <div className='images-container'>
              {renderDesktopImages()}
              {renderMobileImages()}
              {renderOtherImages()}
            </div>
          </section>
        }
      </div>
    </div>
  );
}
