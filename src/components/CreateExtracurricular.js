import React from 'react'
import { useState } from 'react';

function CreateExtracurricular({setExtracurriculars, extracurriculars}) {

    const [company, setCompany] = useState("");
    const [startDuration, setStartDuration] = useState("");
    const [endDuration, setEndDuration] = useState("");
    const [taskOne, setTaskOne] = useState("");
    const [taskTwo, setTaskTwo] = useState("");
    const [taskThree, setTaskThree] = useState("");


  return (
    <React.Fragment>
        <div className='create-title'>Extracurricular</div>
        <h5 className='center'>Activity</h5>
      <div className="experience-title">
        <input type="text" placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
      <h5 className='center'>Duration</h5>
      <div className="experience-duration">
        <input type="text" placeholder='Starting Month - Year' value={startDuration} onChange={(e) => setStartDuration(e.target.value)} />
        <input type="text" placeholder='Ending Month - Year' value={endDuration} onChange={(e) => setEndDuration(e.target.value)} />
      </div>
      <h5 className='center'>Info</h5>
      <div className='experience-tasks'>
        <input type="text" placeholder='In charge of communication with partners' value={taskOne} onChange={(e) => setTaskOne(e.target.value)} />
        </div>
     
      <div className='button-group'>
        <button className='button-add' onClick={() => {
          const extracurricularObject = {
            company,
            startDuration,
            endDuration,
            taskOne,
            taskTwo,
            taskThree
          }
          setCompany("")
          setStartDuration("")
          setEndDuration("")
          setTaskOne("")
          setTaskTwo("")
          setTaskThree("")
          setExtracurriculars(() => 
            [...extracurriculars, extracurricularObject]
          )
          }}>Add</button>
          <button className='button-delete'onClick={() => setExtracurriculars(() => {
          extracurriculars.pop()
          return [...extracurriculars]
          })}>Delete</button>
      </div>
    </React.Fragment>

  )
}

export default CreateExtracurricular