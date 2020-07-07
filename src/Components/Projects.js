import React, { useState } from 'react'
import { SvgIcon } from './Icons'
import Mockup from './Mockup'
import { detect } from 'detect-browser'


const content = [
  {
    title: 'Filtr',
    blurb: 'Filtr is an image editing app that makes use of python Libraries such as Sci-kit Image, Pillow, Numpy, and MatplotLib to edit user\'s images with inteligent filters, tints, and manipulations. \nThe user can also make use of CSS powered filters for tweaking in the frontend. We decided to use cloudinary as our cloud hosting provider however we wanted to minimise the ammount of bandwidth and transformations required so we utilised base 64 encoding and decoding to send images via JSON requests and responses between front and backend. \n The project uses the django rest framework and has frontend built with React. The project was completed in 7 days',
    tech: ['javascript', 'trello', 'heroku', 'html', 'react', 'git', 'django', 'sass', 'python', 'npm'],
    liveLink: 'https://gkj.me.uk/filtr',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: require('../Assets/FiltrScreenshot.png')
  },
  {
    title: 'Plntify',
    blurb: 'Plyntify is a full stack CRUD application using the MERN stack. Plntify is a swapshop for people that love houseplants and like to swap them. Users can upload their own portfolio of plants to swap with other like minded individuals in their area. \n This was a group project completed in an agile sprint utilizing kanban methodologies',
    tech: ['javascript', 'node', 'trello', 'mongo', 'git', 'heroku', 'html', 'react', 'css', 'bulma', 'npm'],
    liveLink: 'https://gkj.me.uk/plntify',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: require('../Assets/PlntifyScreenshot.png')
  },
  {
    title: 'Celebrity Lookalike',
    blurb: 'This hackathon style challenge is a one page react site that consumes two public APIs. \n A user can give us a link to their photo and the Luxand Cloud API will tell us which celebrity they look most alike. We then pass this name to the Microsoft Azure Cognitive Services API to search Bing for an image of the celebrity.',
    tech: ['javascript', 'css', 'bulma', 'react', 'html', 'netlify', 'yarn'],
    liveLink: 'https://find-your-celebrity-lookalike.netlify.app/',
    githubLink: 'https://github.com/Jompra/sei-project-2',
    image: require('../Assets/CelebrityScreenshot.png')
  },
  {
    title: 'Pupper',
    blurb: 'This is a modern take on the arcade game ‘frogger’ It was my first ever web development project and cemented many of the skills that I had learnt in class. We were restricted to use vanilla JavaScript, HTML, and CSS.',
    tech: ['javascript', 'css', 'html', 'git', 'github'],
    liveLink: 'https://jompra.github.io/sei-project-one/',
    githubLink: 'https://github.com/Jompra/sei-project-one',
    image: require('../Assets/PupperScreenshot.png')
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

  console.log(contentIndex)

  return (
    <section id="projects" className="projects">
      <div className="columns">
        <div className="column is-half">
          <Mockup
            image={content[contentIndex].image}
          />
        </div>
        <div className="column description">
          <h1>{content[contentIndex].title}</h1>
          {content[contentIndex].blurb.split('\n').map(sentence => (
            <p key={sentence}>{sentence}</p>
          ))}
          <h2>Tech</h2>
          {content[contentIndex].tech.map(tech => (
            <SvgIcon
              key={tech}
              width={38}
              height={38}
              icon={tech}
              primaryFill={'#41b4d3'}
              secondaryFill={'#242323'}
              backgroundFill={'#ffffff'}
            />
          ))}
          <div>
            <div className="site-link">
              <a href={content[contentIndex].liveLink}
                target="_blank"
                rel="noreferrer">

                <SvgIcon
                  width={25}
                  height={25}
                  icon={browser.name}
                  primaryFill={'#242323'}
                />
                <p>Website</p>
              </a>
            </div>

            <div className="site-link">
              <a href={content[contentIndex].githubLink}
                target="_blank"
                rel="noreferrer">

                <SvgIcon
                  width={25}
                  height={25}
                  icon={'github'}
                  primaryFill={'#242323'}
                />
                <p>Github</p>
              </a>
            </div>

          </div>
          <div className="scroll-buttons">
            <h3 onClick={scrollPrevious}>← Previous</h3>
            <h3 onClick={scrollNext}>Next →</h3>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects

