// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLine = props => {
  const {projectData} = props
  return (
    <div className="card-container">
      <img className="card-image" src={projectData.imageUrl} alt="project" />
      <div className="title-duration-con">
        <h1 className="title">{projectData.projectTitle}</h1>

        <div className="cal-dur-con">
          <AiFillCalendar />
          <p className="duration">{projectData.duration}</p>
        </div>
      </div>
      <p className="project-discription">{projectData.description}</p>
      <a className="visit-link" href={projectData.projectUrl} target="__blank">
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimeLine
