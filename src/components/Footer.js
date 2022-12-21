import React from 'react'
import Link from './Link'

function Footer() {
  return (
    <div className='footer'>
      <Link link={"https://www.linkedin.com/in/nikolaas-daem-834185123/"}>LinkedIn</Link>
      <Link >Nikolaas Daem</Link>
      <Link link={"http://www.github.com/DaemNe"}>Github</Link>
    </div>
  )
}

export default Footer