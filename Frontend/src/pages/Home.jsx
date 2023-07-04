import React from 'react'
import AboutUs from '../components/AboutUs'
import CourseList from '../components/CourseList'
import HeroSection from "../components/HeroSection"
import Contact from "../components/Contact"
import NavbarHorizontal from '../components/NavbarHorizontal'
import { HomePageContainer } from '../styles/pageStyles/HomeStyles'



const Home = () => {
  return (
    <HomePageContainer>
      <NavbarHorizontal />
      <HeroSection/>
      <CourseList/>
      <AboutUs/>
      <Contact/>
    </HomePageContainer>
  )
}

export default Home
