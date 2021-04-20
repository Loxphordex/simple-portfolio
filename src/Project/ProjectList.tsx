import { dataList } from './projectData'
import Project from './Project'
import './Project.scss'

export default function ProjectList() {
  return (
    <div className='project-list-container'>
      {dataList.map(project => {
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
        />
      })}
    </div>
  )
}