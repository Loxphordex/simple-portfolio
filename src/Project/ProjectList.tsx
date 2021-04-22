import { useState } from 'react'
import { dataList, IProject } from './projectData'
import Project from './Project'
import './Project.scss'

export default function ProjectList() {
  const [openProject, setOpenProject] = useState('')

  const renderAllProjects = () => {
    return dataList.map((project) => {
      return renderProject(project)
    })
  }

  const renderOpenProject = () => {
    const project = dataList.find(p => p.name === openProject)
    if (project) {
      return renderProject(project)
    }
  }

  const renderClosedProjects = () => {
    const projects = dataList.filter(p => p.name !== openProject)
    return projects.map((project) => {
      return renderProject(project)
    })
  }

  const renderProject = (project: IProject) => {
    return <Project
      key={project.name} 
      name={project.name}
      links={project.links}
      theme={project.theme}
      logoImage={project.logoImage}
      desktopImages={project.desktopImages} 
      mobileImages={project.mobileImages}
      otherImages={project.otherImages}
      info={project.info}
      fadeInKey={project.fadeInKey}
      openProject={openProject}
      setOpenProject={setOpenProject}
    /> 
  }

  const isProjectOpen = () => {
    if (!openProject) {
      return false
    }

    if (openProject && openProject === '') {
      return false
    }

    return true
  }

  return (
    <div className={`project-list-container ${isProjectOpen() ? 'open-project-format' : String()}`}>
      { !isProjectOpen() && renderAllProjects()}

      <div className={`open-project-container ${!isProjectOpen() ? 'no-display' : String()}`}>
        { isProjectOpen() && renderOpenProject()}
      </div>

      <div className={`closed-project-container ${!isProjectOpen() ? 'no-display' : String()}`}>
        { isProjectOpen() && renderClosedProjects()}
      </div>
    </div>
  )
}