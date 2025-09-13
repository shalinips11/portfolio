import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" />
      <h1><span>I'm Shivashalini,</span> frontend developer </h1>
      <p>I am  passionate web developer skilled in HTML, CSS, JavaScript, React.js, and Python. Currently learning backend development and 
        the MERN stack, 
        I enjoy building creative, user-friendly projects and continuously enhancing my problem-solving skills.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
