import React from 'react'
import ProjectCard from './ProjectCard'


const content = [
  {
    title: 'Filtr',
    blurb: 'Filtr is an image editing app that makes use of python Libraries such as Sci-kit Image, Pillow, Numpy, and MatplotLib to edit user\'s images with inteligent filters, tints, and manipulations. \nThe user can also make use of CSS powered filters for tweaking in the frontend. We decided to use cloudinary as our cloud hosting provider however we wanted to minimise the ammount of bandwidth and transformations required so we utilised base 64 encoding and decoding to send images via JSON requests and responses between front and backend. \n The project uses the django rest framework and has frontend built with React. The project was completed in 7 days',
    tech: ['javascript', 'trello', 'heroku', 'html', 'react', 'git', 'django', 'sass', 'python'],
    liveLink: 'https://plntify.herokuapp.com',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: 'https://www.free-css.com/assets/images/free-css-templates/page255/perfect-learn.jpg'
  },
  {
    title: 'Plntify',
    blurb: 'Plyntify is a full stack CRUD application using the MERN stack. Plntify is a swapshop for people that love houseplants and like to swap them. Users can upload their own portfolio of plants to swap with other like minded individuals in their area. \n This was a group project completed in an agile sprint utilizing kanban methodologies',
    tech: ['javascript', 'node', 'trello', 'mongo', 'git', 'heroku', 'html', 'react', 'css', 'bulma'],
    liveLink: 'https://plntify.herokuapp.com',
    githubLink: 'https://github.com/Jompra/sei-group-project',
    image: 'https://res.cloudinary.com/jompra/image/upload/v1592417836/Portfolio/Screenshot_2020-06-17_at_19.16.39_tfmiub.png'
  },
  {
    title: 'Celebrity Lookalike',
    blurb: 'This hackathon style challenge is a one page react site that consumes two public APIs. \n A user can give us a link to their photo and the Luxand Cloud API will tell us which celebrity they look most alike. We then pass this name to the Microsoft Azure Cognitive Services API to search Bing for an image of the celebrity.',
    tech: ['javascript', 'css', 'bulma', 'react', 'html', 'netlify'],
    liveLink: 'https://find-your-celebrity-lookalike.netlify.app/',
    githubLink: 'https://github.com/Jompra/sei-project-2',
    image: 'https://www.free-css.com/assets/images/free-css-templates/page255/perfect-learn.jpg'
  },
  {
    title: 'Pupper',
    blurb: 'This is a modern take on the arcade game ‘frogger’ It was my first ever web development project and cemented many of the skills that I had learnt in class. We were restricted to use vanilla JavaScript, HTML, and CSS.',
    tech: ['javascript', 'css', 'html', 'git', 'github'],
    liveLink: 'https://find-your-celebrity-lookalike.netlify.app/',
    githubLink: 'https://github.com/Jompra/sei-project-2',
    image: 'https://www.free-css.com/assets/images/free-css-templates/page255/perfect-learn.jpg'
  }
]

function Projects() {

  return (
    <section className="projects">
      <div className="projects-wrapper columns is-centered">
        {content.slice(0, 2).map(project => (
          <ProjectCard
            key={project.title}
            content={project}
          />
        ))}
      </div>
      <div className="projects-wrapper columns is-centered">
        {content.slice(2, 4).map(project => (
          <ProjectCard
            key={project.title}
            content={project}
          />
        ))}
      </div>
      <div>
      </div>
    </section>
  )
}

export default Projects