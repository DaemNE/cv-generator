import React from 'react'

function Experience({experiences}) {

  const listExperiences = experiences.map((experience, id) => {
    return (
      <div key={id}>
        <div className='experience-item'>
          <span className='company-item'>{experience.company},</span> <span className='location-item'>{experience.location}</span> -- <span className='title-item'>{experience.title}</span>
        </div>
        <div className='experience-item duration-item'>
          {experience.startDuration} - {experience.endDuration}
        </div>
        <div className='experience-item task-item'>
          <div>{experience.taskOne}</div>
          <div>{experience.taskTwo}</div>
          <div>{experience.taskThree}</div>
        </div>
      </div>
    )
  })

  return (
    <div className='preview-component'>
      <div className='cv-display-title'>
        Experience
      </div>
      <div>
        {listExperiences}
      </div>
    </div>
  )
}

export default Experience
