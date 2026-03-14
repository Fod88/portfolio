import React from 'react'

export default function SkillCircle({percent,title,position}) {
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference
  return (
    <div className='skillCircle' style={{transform : `translateX(${position}px)`, transition : "0.6s ease" }}>
      <svg width={'180'}  height={'180'} >
        <circle 
          cx={'90'}
          cy={'90'}
          r={radius}
          className='bg'
        />
        <circle
          cx={'90'} 
          cy={'90'}
          r={radius}
          className='progress'
          style={{
            strokeDasharray : circumference,
            strokeDashoffset : offset
          }}
        />
      </svg>
      <span className='percent'>{percent}%</span>
      <h3> {title} </h3>
    </div>
  )
}
