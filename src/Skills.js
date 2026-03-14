import React, { useState } from 'react'
import SkillCircle from './SkillCircle'

export default function Skills() {

  const skills = [
    { percent: 90, title: "Responsive Design" },
    { percent: 90, title: "CSS3" },
    { percent: 95, title: "HTML" },
    { percent: 90, title: "FrontEnd Development" },
    { percent: 85, title: "JavaScript (ES6+)" },
    { percent: 80, title: "React JS" },
    { percent: 90, title: "Bootstrap" }
  ]

  const [position, setPosition] = useState(0)

  const moveRight = () => {
    if (position > -(skills.length - 3) * 240) {
      setPosition(prev => prev - 240)
    }
  }

  const moveLeft = () => {
    if (position < 3 * 240) {
      setPosition(prev => prev + 240)
    }
  }

  return (
    <>
      <div className='skills' id={'Skills'}>
        <h1 className='skilTitle mb-4'>Skills</h1>
        <p className='skilP'>You Can See My Skills Here</p>

        <div className='skillsSection col-sm-5'>
          <button className='skillbtn btnl' onClick={moveLeft}>❮</button>

          {
            skills.map((skill, index) => (
              <SkillCircle
                key={index}
                percent={skill.percent}
                title={skill.title}
                position={position}
              />
            ))
          }

          <button className='skillbtn btnr' onClick={moveRight}>❯</button>
        </div>
      </div>
    </>
  )
}
