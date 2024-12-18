// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeline = props => {
  const {courseData} = props
  return (
    <div className="card-con">
      <div className="title-duration-con">
        <h1 className="title">{courseData.courseTitle}</h1>
        <div className="cal-dur-con">
          <AiFillClockCircle />
          <p className="duration">{courseData.duration}</p>
        </div>
      </div>
      <p className="project-discription">{courseData.description}</p>
      <div className="tags-con">
        {courseData.tagsList.map(each => (
          <p className="tag" key={each.id}>
            {each.name}{' '}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeline
