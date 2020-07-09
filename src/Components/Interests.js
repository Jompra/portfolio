import React from 'react'

const content = [
  {
    title: 'Vinyl Streamer',
    blurb: 'Created a streaming server to add a vinyl turntable to a Sonos system.',
    image: require('../Assets/RecordPlayer.jpg')
  },
  {
    title: 'DIY Subwoofer',
    blurb: 'Built a static Signal Processor using an arduino to add a low-cost subwoofer to a Sonos system.',
    image: require('../Assets/Sonos.jpg')
  },
  {
    title: 'PI VPN',
    blurb: 'Added a VPN to my home network with IP address email updates to avoid paying for a static address',
    image: require('../Assets/RaspberryPi.jpg')
  },
  {
    title: 'Pingu',
    blurb: 'Ping, Heroku.\nRunning on my Pi, a Python script that requests project homepages during office hours to keep the dynos awake within free usage limits',
    image: require('../Assets/Penguin.jpg')
  },
  {
    title: 'Automation',
    blurb: 'Automated an outdoor lighting and plant watering system using an Arduino and openWeather.',
    image: require('../Assets/Balcony.jpg')
  }
]

function Interests() {
  return (
    <section id="interests" className="interests">
      <div className="interests-content">
        <div className="intro-blurb">
          <h1>My <span className="blue-text">Interests</span></h1>
          <p>When I&apos;m able to tear myself away from work I&apos;ll generally be found on my bicycle, trying to find some quiet roads. Not easy in London unfortunately. If the weather is too bad to ride I&apos;ll generally be messing with a RaspberryPi or an Arduino and a soldering iron.</p>
        </div>
        <div className="project-area columns">
          {content.slice(0, 3).map(card => (
            <div key={card.image} className="column image-card is-third" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="card-text">
                <h2>{card.title}</h2>
                <p>{card.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="project-area columns">
          {content.slice(3, 5).map(card => (
            <div key={card.image} className="column image-card" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="card-text">
                <h2>{card.title}</h2>
                <p>{card.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
export default Interests
