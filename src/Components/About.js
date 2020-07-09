import React from 'react'
import { SvgIcon } from './Icons'


const technicalSkills = ['Node.js', 'JavaScript', 'React.js', 'Python', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Django', 'HTML', 'CSS', 'Ruby', 'Heroku', 'Jest', 'VScode', 'Crestron']

const currentlyLearning = ['Vue.js', 'ASP.net', 'c#']

function About() {

  return (
    <section className="section about" id="about">
      <div className="about-content">
        <div className="columns">
          <div className="column is-one-third about-blurb">
            <div className="intro-blurb">
              <h1>About <span className="blue-text">Me</span></h1>
              <h2>I&apos;m an Engineer, Entrepreneur, Tinkerer<span className="blue-text">.</span></h2>
              <p>I initially decided to teach myself Python and C# using online platforms, books, and short courses, before deciding to accelerate my knowledge and partake in a bootcamp with General Assembly. I&apos;m language agnostic, fast learning, goal driven and relish the opportunity to overcome complex problems.
            I&apos;m looking to join a team where I can grow and develop my skills, whilst contributing to the team&apos;s success on awesome projects.</p>
            </div>
            <div>
              <h2>Currently Learning <span className="blue-text">–</span></h2>
              <div className="columns is-mobile">
                {currentlyLearning.map(icon => (
                  <div key={icon} className="column is-3 tech-logo">
                    <SvgIcon
                      width={66}
                      height={66}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="">{icon}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="column">
              <h1>Skills <span className="blue-text">–</span></h1>
              <div className="columns is-mobile is-multiline">
                {technicalSkills.map(icon => (
                  <div key={icon} className="tech-logo">
                    <SvgIcon
                      width={66}
                      height={66}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="">{icon}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About