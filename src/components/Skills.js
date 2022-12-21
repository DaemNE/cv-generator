import React from 'react'

function Skills({skills}) {

  const listItems = skills.map((skill, id) => {
    return (
      <li key={id}>
      {skill}
      </li>
    )
  })
  return (
    <div className='preview-component'>
        <div className='cv-display-title'>Skills</div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default Skills