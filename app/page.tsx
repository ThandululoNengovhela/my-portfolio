import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Body from './components/Body'
import Contact from './components/Contact'
import Slide from './components/Slide'
import Footer from './components/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";


const page = () => {
return (
  <>
  <Header/>
  <Profile/>
  <Body/>
  <Slide/>
  <Contact/>
  <Footer/>
  </>
)
}

export default page
