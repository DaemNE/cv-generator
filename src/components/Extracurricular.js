import React from 'react'

function Extracurricular({extracurriculars}) {

    const listExperiences = extracurriculars.map((extracurricular, id) => {
        return (
          <div key={id}>
            <div className='experience-item'>
              <span className='company-item'>{extracurricular.company},</span> <span className='location-item'>{extracurricular.location}</span> -- <span className='title-item'>{extracurricular.title}</span>
            </div>
            <div className='experience-item duration-item'>
              {extracurricular.startDuration} - {extracurricular.endDuration}
            </div>
            <div className='experience-item task-item'>
              <div>{extracurricular.taskOne}</div>
              <div>{extracurricular.taskTwo}</div>
              <div>{extracurricular.taskThree}</div>
            </div>
          </div>
        )
      })

  return (
    <div className='preview-component'>
      <div className='cv-display-title'>
        Extracurricular
      </div>
      <div>
        {listExperiences}
      </div>
    </div>
  )
}

export default Extracurricular