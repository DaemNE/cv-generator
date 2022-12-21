import React from 'react'

function Link({link, children}) {

  return (
    <a href={link}>{children}</a>
  )
}

export default Link