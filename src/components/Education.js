import React from 'react'

function Education({educations}) {

  const listEducations = educations.map((education, id) => {
    return (
      <div key={id}>
        <div className='experience-item'>
          <span className='company-item'>{education.school},</span> <span className='location-item'>{education.location}</span> -- <span className='title-item'>{education.title}</span>
        </div>
        <div className='experience-item duration-item'>
          {education.startDuration} - {education.endDuration}
        </div>
        <div className='experience-item task-item'>
          <div className='wrap'>{education.courseOne}</div>
          <div className='wrap'>{education.courseTwo}</div>
          <div className='wrap'>{education.courseThree}</div>
        </div>
      </div>
    )
  })

  return (
    <div className='preview-component'>
      <div className='cv-display-title'>
        Education
      </div>
      <div>
        {listEducations}
      </div>
    </div>
  )
}

export default Education