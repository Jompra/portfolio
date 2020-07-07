import React from 'react'
import { SvgIcon } from './Icons'

const content = [
  {
    icon: 'email',
    text: 'georgekeesjones@gmail.com',
    link: 'mailto: georgekeesjones@gmail.com'
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
    <footer className="footer">
      <div className=" content is-centered">
        {content.map(link => (
          <div key={link.text} className="">
            <a href={link.link}>
              <SvgIcon
                width={40}
                height={40}
                icon={link.icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#ffffff'}
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