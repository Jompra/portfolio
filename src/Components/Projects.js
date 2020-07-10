import React, { useState } from 'react'
import { SvgIcon } from './Icons'
import Mockup from './Mockup'
import { detect } from 'detect-browser'


const content = [
  {
    title: 'Filtr',
    blurb: 'Filtr is an image editing app that makes use of Python Libraries such as Sci-kit Image, Pillow, NumPy, and Matplotlib to edit user\'s images with intelligent filters, tints, and manipulations. \nThe user can also make use of CSS powered filters for tweaking in the frontend. We decided to use Cloudinary as our cloud hosting provider however we wanted to minimise the amount of bandwidth and transformations required so we utilised base 64 encoding and decoding to send images via JSON requests and responses between front and backend.\nThe project uses the Django rest framework and has frontend built with React. The project was completed in 7 days.',
    tech: ['javascript', 'trello', 'heroku', 'html', 'react', 'git', 'django', 'sass', 'python', 'npm'],
    liveLink: 'https://gkj.me.uk/filtr',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: require('../Assets/FiltrDemo.gif')
  },
  {
    title: 'Plntify',
    blurb: 'Plntify is a full stack CRUD application using the MERN stack. Plntify is a swap shop for people that love houseplants and like to swap them. Users can upload their own portfolio of plants to swap with other likeminded individuals in their area.\nThis was a group project completed in an agile sprint utilizing Kanban methodologies.',
    tech: ['javascript', 'node', 'trello', 'mongo', 'git', 'heroku', 'html', 'react', 'css', 'bulma', 'npm'],
    liveLink: 'https://gkj.me.uk/plntify',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: require('../Assets/PlntifyDemo.gif')
  },
  {
    title: 'Celebrity Lookalike',
    blurb: 'This hackathon style challenge is a single page React app that consumes two public APIs. \n A user can give us a link to their photo and the Luxand Cloud API will tell us which celebrity they look most alike. We then pass this name to the Microsoft Azure Cognitive Services API to search Bing for an image of the celebrity.',
    tech: ['javascript', 'css', 'bulma', 'react', 'html', 'netlify', 'yarn'],
    liveLink: 'https://find-your-celebrity-lookalike.netlify.app/',
    githubLink: 'https://github.com/Jompra/sei-project-2',
    image: require('../Assets/CelebDemo.gif')
  },
  {
    title: 'Pupper',
    blurb: 'This is a modern take on the arcade game ‘frogger’. It was my first ever web development project and cemented many of the skills that I had learnt in class. We were restricted to use vanilla JavaScript, HTML, and CSS.',
    tech: ['javascript', 'css', 'html', 'git', 'github'],
    liveLink: 'https://jompra.github.io/sei-project-one/',
    githubLink: 'https://github.com/Jompra/sei-project-one',
    image: require('../Assets/PupperDemo.gif')
  }
]

function Projects() {
  const [contentIndex, setContentIndex] = useState(0)

  const browser = detect()

  const scrollNext = () => {
    console.log(contentIndex)
    if (contentIndex === content.length - 1) {
      setContentIndex(0)
    } else {
      setContentIndex(contentIndex + 1)
    }
  }

  const scrollPrevious = () => {
    console.log(contentIndex)
    if (contentIndex === 0) {
      setContentIndex(content.length - 1)
    } else {
      setContentIndex(contentIndex - 1)
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="background-color-box">

      </div>
      <div className="columns project-content">




        <div className="column is-one-third mockup-area">
          <div>
            <h1>Projects</h1>
          </div>
          <Mockup
            image={content[contentIndex].image}
          />
        </div>
        <div className="column description">
          <div className="blurb">
            <h5>{content[contentIndex].title}</h5>
            {content[contentIndex].blurb.split('\n').map(sentence => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>

          <h2>Tech <span className="blue-text">–</span></h2>
          {content[contentIndex].tech.map(tech => (
            <SvgIcon
              key={tech}
              width={48}
              height={48}
              icon={tech}
              primaryFill={'#41b4d3'}
              secondaryFill={'#242323'}
              backgroundFill={'#f1f1f1'}
            />
          ))}
          <div>
            <div className="site-link">
              <button>
                <a href={content[contentIndex].liveLink}
                  target="_blank"
                  rel="noreferrer noopener">

                  <SvgIcon
                    width={20}
                    height={20}
                    icon={browser.name}
                    primaryFill={'#242323'}
                  />
                  Live
                </a>
              </button>
            </div>



            <div className="site-link">
              <button>
                <a href={content[contentIndex].githubLink}
                  target="_blank"
                  rel="noreferrer noopener">

                  <SvgIcon
                    width={20}
                    height={20}
                    icon={'github'}
                    primaryFill={'#242323'}
                  />
                  Github
                </a>
              </button>
            </div>

          </div>
          <div className="scroll-buttons">
            <h4 onClick={scrollPrevious}>← Previous</h4>
            <h4 onClick={scrollNext}>Next →</h4>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects

