import React from 'react'

import HeroTitle from './HeroTitle'
import { SvgIcon } from './Icons'
import Nav from './Nav'

const iconOptions = [
  { svg: 'email', path: '#contact' },
  { svg: 'linkedIn', path: 'https://www.linkedin.com/in/georgekjones/' },
  { svg: 'github', path: 'https://github.com/jompra' }
]

function Hero() {

  return (
    <div>
      <div className="hero is-large is-bold">
        <Nav />
        <div className="hero-body">
          <div className="columns">
            <div className="column is-1">
              <div className="social-icons">
                {iconOptions.map(icon => (
                  <a
                    href={icon.path}
                    key={icon.svg}
                  >
                    <SvgIcon
                      width={40}
                      height={40}
                      icon={icon.svg}
                      primaryFill={'#242323'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                  </a>
                ))}
              </div>

            </div>

            <div className="column">
              <div className="name">
                <h1>George Jones</h1>
              </div>
              <div className="hero-title">
                <HeroTitle />
              </div>
            </div>

          </div>

        </div>
        <div className="personal-image">
          <img src={require('../Assets/HeroImage.png')} />
        </div>
      </div>

    </div>

  )
}

export default Hero