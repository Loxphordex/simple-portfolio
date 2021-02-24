import { dataList } from './projectData'
import Project from './Project'
import './Project.scss'

export default function ProjectList() {
  return (
    <section className='project-list-container'>
      {dataList.map(project => {
        return <Project 
          key={project.name} 
          name={project.name}
          links={project.links}
          theme={project.theme} 
          desktopImages={project.desktopImages} 
          mobileImages={project.mobileImages}
          info={project.info} 
        />
      })}
    </section>
  )
}