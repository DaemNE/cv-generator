import React, { useRef, useState } from 'react'
import CreateCv from './CreateCv'
import DisplayCv from './DisplayCv'
import {useReactToPrint} from "react-to-print"

function Content() {

  const [name, setName] = useState("Nikolaas Daem");
  const [title, setTitle] = useState("Front-end web developer");
  const [adress, setAdress] = useState("Hollywood Lane 234, 0001 Earth");
  const [phoneNumber, setPhoneNumber] = useState("(32) 471 03 89 10");
  const [email, setEmail] = useState("NikolaasDaem@example.com");
  const [skills, setSkills] = useState(["Javascript", "Html", "Api Design", "Node.js", "Css", "Git", "Express.js", "React.js", "Agile Development", "Python", "React Hooks"]);
  const [experiences, setExperiences] = useState([
    {
    company: "Dialog Group",
    location: "Mechelen",
    title: "Doc1 / EngageOne Specialist",
    startDuration: "June 2022",
    endDuration: "Current",
    taskOne: "Implementing Doc1 and EngageOne templates for our customer Fluvius.",
    taskTwo: "Working Agile with daily standups discussing current projects.",
    taskThree: "Creating scripts with powershell to help with workflow in our team."
  }, {
    company: "Environnement Brussels",
    location: "Brussels",
    title: "Events Assistant",
    startDuration: "Februari 2020",
    endDuration: "Februari 2021",
    taskOne: "In charge of communication with partners.",
    taskTwo: "Managing room calendar in outlook.",
    taskThree: "Preparing events for internal colleagues and external partners."
  }]);
  const [educations, setEducations] = useState([
    {
      school: "Intec Brussels",
      location: "Brussels",
      title: "Java Developer, I.O.T.",
      startDuration: "April 2021",
      endDuration: "April 2022",
      courseOne: "Coding bootcamp where the fundamentals of java and web development are taught.",
      courseTwo: "Ended successfully.",
  }, {
      school: "Self Taught Web Developer",
      location: "",
      title: "The Odin Project",
      startDuration: "August 2022",
      endDuration: "Current",
      courseOne: "An online curriculum starting from the basics of html, css and javascript with a goal to become a full stack developer with react as Front-end framework and express.js as backend.",
  }]);
  const [languages, setLanguages] = useState([
    {
      language: "Dutch",
      languageLevel: "Native"
    },
    {
      language: "English",
      languageLevel: "Fluent"
    },
    {
      language: "French",
      languageLevel: "Proficient"
    },
  ]);
  const [extracurriculars, setExtracurriculars] = useState([]);

  const componentRef = useRef()

  // throws warning because react-to-print uses findDOMNode
  const handlePrint = useReactToPrint({ content: () => componentRef.current })


  return (
    <div className='content'>
        <DisplayCv 
          name={name}
          title={title}
          adress={adress}
          phoneNumber={phoneNumber}
          email={email}
          skills={skills}
          experiences={experiences}
          educations={educations}
          languages={languages}
          extracurriculars={extracurriculars}
          ref={componentRef}

        />
        <CreateCv 
          setName={setName}
          setTitle={setTitle}
          setAdress={setAdress}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          setSkills={setSkills}
          skills={skills}
          setExperiences={setExperiences}
          experiences={experiences}
          setEducations={setEducations}
          educations={educations}
          setLanguages={setLanguages}
          languages={languages}
          setExtracurriculars={setExtracurriculars}
          extracurriculars={extracurriculars}
        />
        <div className='button-print-reset'>
              <button className='reset-button' onClick={()=> {
                setSkills([])
                setExperiences([])
                setEducations([])
                setLanguages([])
                setExtracurriculars([])
              }} >Reset</button>
              <button className='print-button' onClick={handlePrint}>Print</button>
        </div>
    </div>
  )
}

export default Content