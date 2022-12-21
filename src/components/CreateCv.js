import React from 'react'
import CreatePersonalInformation from './CreatePersonalInformation'
import CreateSkills from './CreateSkills'
import CreateExperience from './CreateExperience'
import CreateEducation from './CreateEducation'
import CreateLanguages from './CreateLanguages'
import styled from 'styled-components'
import CreateExtracurricular from './CreateExtracurricular'

function CreateCv({setName, setTitle, setAdress, setPhoneNumber, setEmail, setSkills, skills, setExperiences, experiences, setEducations, educations, setLanguages, languages, setExtracurriculars, extracurriculars}) {
  return (
    
      <CVCreateWrapper>
        <CreatePersonalInformation
            setName={setName}
            setTitle={setTitle}
            setAdress={setAdress}
            setPhoneNumber={setPhoneNumber}
            setEmail={setEmail}
        />
        <CreateSkills setSkills={setSkills} skills={skills}/>
        <CreateExperience setExperiences={setExperiences} experiences={experiences}/>
        <CreateEducation setEducations={setEducations} educations={educations}/>
        <CreateLanguages setLanguages={setLanguages} languages={languages}/>
        <CreateExtracurricular setExtracurriculars={setExtracurriculars} extracurriculars={extracurriculars} />
      </CVCreateWrapper>
  )
}

export default CreateCv

const CVCreateWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 210mm;
  height: 297mm;
  top: 10px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;