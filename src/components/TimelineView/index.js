// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimeLine from '../ProjectTimelineCard'
import CourseTimeline from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimeLine projectData={each} />
    }
    return <CourseTimeline courseData={each} />
  }

  return (
    <div className="time-line-container">
      <div className="chrono-container">
        <div className="header-container">
          <h1 className="heading">
            My Journey of <br />
            <span className="CCBP-heading">CCBP 4.0</span>{' '}
          </h1>
        </div>

        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => getItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
