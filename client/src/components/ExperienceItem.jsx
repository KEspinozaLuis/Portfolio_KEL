
import React from 'react'

const ExperienceItem = ({icon, year, title, site, desc}) => {
  return (
    <div className='experienceItem'>
        <div className='experienceIcon'>{icon}</div>
        <span className='year'>{year}</span>
        <div className='titleSite'>
            <span className='experienceTitle'>{title}</span> - <span className='site'>{site}</span>
        </div>
        <p className='desc'>{desc}</p>
    </div>
  )
}

export default ExperienceItem