import React from 'react'
import Hero from '../components/elements/Hero'
import Skills from '../components/elements/Skills'
import ProjectOne from '../components/elements/ProjectOne'
import Bottom from '../components/elements/Bottom'
import ProjectTwo from '../components/elements/ProjectTwo'
import ProjectThree from '../components/elements/ProjectThree'
import Cards from '../components/elements/Cards'


const Home = () => {
  return (
    <>
    <Hero/>
    <Skills/>
    <ProjectOne/>
    <ProjectTwo/>
    <ProjectThree/>
    <Cards/>
    <Bottom/>
    </>
  )
}

export default Home