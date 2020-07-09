import React from 'react'
import { SvgIcon } from './Icons'

const content = [
  {
    icon: 'email',
    text: 'Georgekeesjones@gmail.com',
    link: 'mailto: georgekeesjones@gmail.com?subject=Hey%20I%20found%20your%20website...'
  },
  {
    icon: 'linkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/georgekjones/'
  },
  {
    icon: 'github',
    text: 'GitHub',
    link: 'https://github.com/jompra'
  }
]


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {content.map(link => (
          <div key={link.text} className="info-lines">
            <a href={link.link}>
              <SvgIcon
                width={40}
                height={40}
                icon={link.icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#242323'}
                backgroundFill={'#242323'}
              />
              <h3>{link.text}</h3>
            </a>

          </div>
        ))}

      </div>
    </footer>
  )
}

export default Footer