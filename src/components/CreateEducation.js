import React, { useState } from 'react'

function CreateEducation({setEducations, educations}) {

  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [courseOne, setCourseOne] = useState("");
  const [courseTwo, setCourseTwo] = useState("");
  const [courseThree, setCourseThree] = useState("");

  return (
    <React.Fragment>
      <div className='create-title'>Education</div>
      <h5 className='center'>School</h5>
      <div className="experience-title">
        <input type="text" placeholder='School' value={school} onChange={(e) => setSchool(e.target.value)} />
        <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <h5 className='center'>Duration</h5>
      <div className="experience-duration">
        <input type="text" placeholder='Starting Month - Year' value={startDuration} onChange={(e) => setStartDuration(e.target.value)} />
        <input type="text" placeholder='Ending Month - Year' value={endDuration} onChange={(e) => setEndDuration(e.target.value)} />
      </div>
      <h5 className='center'>Courses</h5>
      <div className='experience-tasks'>
        <input type="text" placeholder='In charge of communication with partners' value={courseOne} onChange={(e) => setCourseOne(e.target.value)} />
        <input type="text" placeholder='In charge of communication with partners' value={courseTwo} onChange={(e) => setCourseTwo(e.target.value)} />
        <input type="text" placeholder='In charge of communication with partners' value={courseThree} onChange={(e) => setCourseThree(e.target.value)} />
      </div>
     
      <div className='button-group'>
        <button className='button-add' onClick={() => {
          const educationObject = {
            school,
            location,
            title,
            startDuration,
            endDuration,
            courseOne,
            courseTwo,
            courseThree
          }
          setSchool("")
          setLocation("")
          setTitle("")
          setStartDuration("")
          setEndDuration("")
          setCourseOne("")
          setCourseTwo("")
          setCourseThree("")
          setEducations(() => 
            [...educations, educationObject]
          )
          }}>Add</button>
          <button className='button-delete'onClick={() => setEducations(() => {
          educations.pop()
          return [...educations]
          })}>Delete</button>
        </div>
    </React.Fragment>
  )
}

export default CreateEducation