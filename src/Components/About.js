import React from 'react'
import { SvgIcon } from './Icons'


const technicalSkills = ['node', 'javascript', 'react', 'python', 'mongo', 'postgres', 'git', 'github', 'django', 'html', 'css', 'ruby', 'heroku', 'vscode', 'crestron']

const currentlyLearning = ['vue', 'asp', 'c#']

const professionalSkills = [
  'Unit testing', 'GitHub', 'Team working', 'Active Learning', 'Pair Programming'
]

function About() {

  return (
    <section className="about columns">
      <div className="column is-one-third about-display-area">
        <div>
          <h1>ABOUT <span className="blue-type">ME</span></h1>
        </div>
        <div>
          <h2>I&#39;m a General Assembly Grad, Engineer, Entrepreneur, Tinkerer<span className="blue-type">.</span></h2>
        </div>
        <div>
          <p>I initially decided to teach myself Python and C# using online platforms, books, and short courses, before deciding to accelerate my knowledge and partake in a bootcamp with General Assembly. I&#39;m language agnostic, fast learning, goal driven and relish the opportunity to overcome complex problems.</p>
          <p>I&#39;m looking to join a team where I can grow and develop my skills, whilst contributing to the team&#39;s success on awesome projects.</p>
        </div>
      </div>
      <div className="column is-one-third about-display-area">
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          <h2>Technical <span className="blue-type">—</span></h2>
        </div>
        <div className="logo-feild">
          {technicalSkills.map(tech => (
            <>
              <SvgIcon
                key={tech}
                width={66}
                height={66}
                icon={tech}
                primaryFill={'#ffffff'}
                secondaryFill={'#41b4d3'}
                backgroundFill={'#242323'}
              />
              <p>{tech}</p>
            </>
          ))}

        </div>
      </div>
      <div className="column is-one-third about-display-area">
        <div>
          <h2>Professional <span className="blue-type">—</span></h2>
        </div>
        <div className="skill-field">
          {professionalSkills.map(skill => (
            <h3 key={skill}>{skill}</h3>
          ))}
        </div>
        <div>
          <h2>Currently Learning <span className="blue-type">—</span></h2>
        </div>
        <div className="logo-feild">
          {currentlyLearning.map((tech) => (
            <>
              <SvgIcon
                key={tech}
                width={66}
                height={66}
                icon={tech}
                text={true}
                primaryFill={'#ffffff'}
                secondaryFill={'#41b4d3'}
              />
              <p>{tech}</p>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About