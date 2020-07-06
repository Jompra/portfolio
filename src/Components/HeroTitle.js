import React, { useState } from 'react'

const headlineOptions = [
  'Fullstack Engineer',
  'Backend Developer',
  'Entrepreneur',
  'Frontend Developer',
  'Tinkerer',
  'Problem Solver'
]



function HeroTitle() {
  const [headline, setHeadline] = useState(headlineOptions[0])
  const [headlineWriting, setHeadlineWriting] = useState(false)


  return (
    <h1>{headline}</h1>
  )
}

export default HeroTitle