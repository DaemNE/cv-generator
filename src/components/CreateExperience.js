import React, { useState } from 'react'

function CreateExperience({experiences, setExperiences}) {

  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [taskOne, setTaskOne] = useState("");
  const [taskTwo, setTaskTwo] = useState("");
  const [taskThree, setTaskThree] = useState("");

  return (
    <React.Fragment>
      <div className='create-title'>Experience</div>
      <h5 className='center'>Title</h5>
      <div className="experience-title">
        <input type="text" placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <h5 className='center'>Duration</h5>
      <div className="experience-duration">
        <input type="text" placeholder='Starting Month - Year' value={startDuration} onChange={(e) => setStartDuration(e.target.value)} />
        <input type="text" placeholder='Ending Month - Year' value={endDuration} onChange={(e) => setEndDuration(e.target.value)} />
      </div>
      <h5 className='center'>Tasks</h5>
      <div className='experience-tasks'>
        <input type="text" placeholder='In charge of communication with partners' value={taskOne} onChange={(e) => setTaskOne(e.target.value)} />
        <input type="text" placeholder='In charge of communication with partners' value={taskTwo} onChange={(e) => setTaskTwo(e.target.value)} />
        <input type="text" placeholder='In charge of communication with partners' value={taskThree} onChange={(e) => setTaskThree(e.target.value)} />
      </div>
     
      <div className='button-group'>
        <button className='button-add' onClick={() => {
          const companyObject = {
            company,
            location,
            title,
            startDuration,
            endDuration,
            taskOne,
            taskTwo,
            taskThree
          }
          setCompany("")
          setLocation("")
          setTitle("")
          setStartDuration("")
          setEndDuration("")
          setTaskOne("")
          setTaskTwo("")
          setTaskThree("")
          setExperiences(() => 
            [...experiences, companyObject]
          )
          }}>Add</button>
          <button className='button-delete'onClick={() => setExperiences(() => {
          experiences.pop()
          return [...experiences]
          })}>Delete</button>
      </div>
    </React.Fragment>
  )
}

export default CreateExperience