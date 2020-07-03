import React from 'react'
import { SvgIcon } from './Icons'
import { detect } from 'detect-browser'


function ProjectCard({ content }) {
  const browser = detect()

  return (
    <div className="project-card column is-half">
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
      <a href={content.liveLink}
        target="_blank"
        rel="noreferrer">
        <button>
          <SvgIcon
            width={25}
            height={25}
            icon={browser.name}
            primaryFill={'#fff'}
          />
      Live
        </button>
      </a>

      <a href={content.githubLink}
        target="_blank"
        rel="noreferrer">
        <button>
          <SvgIcon
            width={25}
            height={25}
            icon={'github'}
            primaryFill={'#fff'}
          />
      Github
        </button>
      </a>
    </div>
  )
}

export default ProjectCard