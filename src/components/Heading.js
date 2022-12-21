import React from 'react'

function Heading({name, title, adress, phoneNumber, email}) {

  return (
    <div className='cv-heading'>
        <div className='heading-name'>{name}</div>
        <div className='heading-profession'>{title}</div>
        <hr />
        <div className='heading-adress'>
            <div>{adress}</div>
            <div>|</div>
            <div>{phoneNumber}</div>
            <div>|</div>
            <div>{email}</div>
        </div>
        <hr />
    </div>
  )
}

export default Heading