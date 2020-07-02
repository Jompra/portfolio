import React from 'react'
import { SvgIcon } from './Icons'


const technicalSkills = ['node', 'javascript', 'react', 'python', 'mongo', 'postgres', 'git', 'github', 'django', 'html', 'css', 'ruby', 'heroku', 'vscode', 'crestron']

const currentlyLearning = ['vue', 'asp', 'c#']

const professionalSkills = [
  'Unit testing', 'GitHub', 'Team working', 'Active Learning', 'Pair Programming'
]

function About() {

  return (
    <section className="about pure-g">
      <div className="display pure-u-1-3">
        <div>
          <h1>ABOUT <span className="blue-type">ME</span></h1>
        </div>
        <div>
          <h2>I&#39;m a General Assembly Grad, Engineer, Entrepreneur, Tinkerer<span className="blue-type">.</span></h2>
        </div>
        <div>
          <p>Fun blurb bit to waffle about how awesome you are again. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="display pure-u-1-3">
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          <h2>Technical <span className="blue-type">—</span></h2>
        </div>
        <div className="logo-feild">
          {technicalSkills.map(tech => (
            <SvgIcon
              key={tech}
              width={66}
              height={66}
              icon={tech}
              primaryFill={'#ffffff'}
              secondaryFill={'#41b4d3'}
              backgroundFill={'#242323'}
            />
          ))}

        </div>
      </div>
      <div className="display">
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
            <SvgIcon
              key={tech}
              width={66}
              height={66}
              icon={tech}
              text={true}
              primaryFill={'#ffffff'}
              secondaryFill={'#41b4d3'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About