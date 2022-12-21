import React from 'react'

function CreatePersonalInformation({setName, setTitle, setAdress, setPhoneNumber, setEmail}) {
  return (
    <div className='create-info'>
      <div className='create-title'>Personal Information</div>
      <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='Adress' onChange={(e) => setAdress(e.target.value)}/>
      <input type="text" placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)}/>
      <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

export default CreatePersonalInformation