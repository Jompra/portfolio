import React from 'react'
import { SvgIcon } from './Icons'

function ProjectCard({ content }, assignedIndex, currentIndex, browser) {

  console.log(browser)
  return (
    <div
      className="project-card"
      style={{ 'background-image': `linear-gradient(356deg, #676767 100%, #373737 46%), url(${content.backgroundImage})` }}
    >

      <div>
        <h1>{content.title}</h1>
        {content.blurb.split('\n').map((sentence, i) => (
          <p key={i}>{`${sentence}`}</p>
        ))}
      </div>

      <div>
        <h2>Tech <span className="blue-type">—</span></h2>
        {content.tech.map(tech => (

          <SvgIcon
            key={tech}
            className="tech-used-icon"
            width={38}
            height={38}
            icon={tech}
            primaryFill={'#000'}
            secondaryFill={'#ffffff'}
            backgroundFill={'#41b4d3'}
          />

        ))}
      </div>

      <button>
        <SvgIcon
          width={25}
          height={25}
          icon={browser}
          primaryFill={'#fff'}
        />
      Live
      </button>
      <button>
        <SvgIcon
          width={25}
          height={25}
          icon={'github'}
          primaryFill={'#fff'}
        />
      Github
      </button>
    </div>

  )
}

export default ProjectCard