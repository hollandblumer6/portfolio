import React from 'react'
import Nav from './Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

function Header() {
  return (
    <div className="header">
      <h2> Portfolio </h2>
      <div className="header-content"> 
        <h1> HOLLAND BLUMER</h1>
        <Nav/>
      </div>
      <div className="icons"> <FontAwesomeIcon icon={faInstagram} size="xl" /> <FontAwesomeIcon icon={faYoutube} size="xl"/></div> 
    </div>
  )
}

export default Header