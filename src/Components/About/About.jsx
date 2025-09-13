import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'
const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""></img>
      </div>
     <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt=""></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am passionate about creating web applications with the MERN stack and exploring AI solutions that make life smarter and more accessible.</p>
                  <p>   My goal is to use technology creatively to build projects that have a real impact.</p>
            </div>
            < div className="about-skills">
              <div div className="about-skill"><p>HTML&CSS</p><hr style={{width:"70%"}} /></div>
                 <div div className="about-skill"><p>JavScript</p><hr style={{width:"50%"}} /></div>
                  <div div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div> 
                  <div div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
                   <div div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>

            </div>
        </div>
     </div>
     <div className="about-achievements">
        <div className="about-achievement">
            <h1>Experience</h1>
            <p>Fresher</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Projects</p>
        </div>
        <hr />
     </div>
   </div>
  )
}

export default About
