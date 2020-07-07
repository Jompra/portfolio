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
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [headlineWriting, setHeadlineWriting] = useState(false)
  let headlineCharIndex = 0

  const changeHeadline = () => {
    const current = headlineOptions[headlineIndex].split('')
    const next = headlineOptions[headlineIndex + 1].split('')
    

  }

  React.useEffect(() => {
    changeHeadline()
  }, [])
  return (
    <h1>{headlineOptions[headlineIndex]}</h1>
  )
}

export default HeroTitle