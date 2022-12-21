import React, {useState} from 'react'

function CreateSkills({setSkills, skills}) {

  const [skillInput, setSkillInput] = useState("");

  return (
    <div className='create-skills'>
      <div className='create-title'>Skills</div>
      <div className="create-skill-input">
        <input className='create-skill-input' type="text" placeholder='React.js' value={skillInput} onKeyDownCapture={(e) => {
          console.log(e)
          if (e.key === "Enter") {
            setSkillInput("")
            setSkills(() => 
            [...skills, skillInput]
        )
          }
        }} onChange={(e) => setSkillInput(e.target.value)}/>
      </div>
      <div className='button-group'>
        <button className='button-add' onClick={() => {
        setSkillInput("")
        setSkills(() => 
          [...skills, skillInput]
        )
        }}>Add</button>
        <button className='button-delete'onClick={() => setSkills(() => {
          skills.pop()
          return [...skills]
          })}>Delete</button>
      </div>
    </div>
  )
}

export default CreateSkills