import React from 'react'
import Heading from './Heading'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Languages from './Languages'
import styled from "styled-components"
import Extracurricular from './Extracurricular'

export const DisplayCv = React.forwardRef(({name, title, adress, phoneNumber, email, skills, experiences, educations, languages, extracurriculars}, ref) => {


  return (
        <CVPreviewWrapper ref={ref}>
          <Heading
            name={name}
            title={title}
            adress={adress}
            phoneNumber={phoneNumber}
            email={email}
          />
          <Skills skills={skills}/>
          <Experience experiences={experiences}/>
          <Education educations={educations}/>
          <Languages languages={languages}/>
          <Extracurricular extracurriculars={extracurriculars} />
        </CVPreviewWrapper>
  )
})

export default DisplayCv

const CVPreviewWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 210mm;
  height: 297mm;
  top: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;