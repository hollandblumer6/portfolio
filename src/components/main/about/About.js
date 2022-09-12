import React from 'react'
import Temp from '../../../assets/images/temp-headshot.png'

function About() {
  return (
    <div className="about">
      <section> 
        <article> 
          <h3> ABOUT HOLLAND </h3>
          <p> Holland Blumer views technology as the secret ingredient to enhancing communication and sustainability efforts. With two engineering degrees from Northwestern University (B.S.) and Dartmouth College (M.Eng) under her belt, experience in Silicon Valley and in automotive industry, she has a solid grasp of the ever-evolving technological field, and her mission is to leverage technology to improve communication, sustainability, and accessibility efforts.</p>
          <h3> Certificates </h3>
          <ul> 
            <li>
              Front-End Developer
            </li>
            <li>
              Back-End Developer
            </li>
            <li>
              Algorithmic Trading
            </li>
            </ul>

        </article>

        <img src={Temp} className="profile-image"></img>
      </section>
    </div>
  )
}

export default About