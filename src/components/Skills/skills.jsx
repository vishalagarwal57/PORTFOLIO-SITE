import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import BusMag from '../../assets/bussinessM.jpg';
const Skills = () => {
  return (
    <div>
        <selection id="skills">

            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I specialize in transforming ideas into dynamic and interactive web experiences. As a web developer, I code, design, and optimize websites that not only look stunning but also perform flawlessly. Whether it's crafting responsive front-end interfaces to captivate users or building robust back-end systems for seamless functionality, I bring your web projects to life. My toolkit includes a mastery of HTML, CSS, JavaScript, and a range of cutting-edge frameworks and tools. I thrive on turning challenges into opportunities and creating web solutions that exceed expectations. Let's collaborate and elevate your online presence together.</span>
            <div className="skillBars">
                <div className="skillBar">
                  <img src={UIDesign} alt="" className='skillBarImg' />
                  <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text,you can write your own content here.</p>
                  </div>
               </div>
               <div className="skillBar">
                  <img src={WebDesign} alt="" className='skillBarImg' />
                  <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>This is demo text can be changed while making the production ready website.</p>
                  </div>
               </div>   
               <div className="skillBar">
                  <img src={AppDesign} alt="" className='skillBarImg' />
                  <div className="skillBarText">
                    <h2>App Development</h2>
                    <p>You can write text related to mobile app development.</p>
                  </div>
               </div> 
               <div className="skillBar">
                  <img src={BusMag} alt="" className='skillBarImg' />
                  <div className="skillBarText">
                    <h2>Bussiness Managment</h2>
                    <p>This is a demo text,you can write your own content here.</p>
                  </div>
               </div>
            </div>
        </selection>
    </div>
  )
}

export default Skills




/*Hello, I'm [Your Name], a passionate web developer with a flair for crafting digital experiences. My journey in web development began [mention how and when it started]. With a strong foundation in [mention your primary skills or technologies], I have honed my craft by working on diverse projects, ranging from [briefly describe a project type, e.g., e-commerce websites to responsive web apps]. I'm committed to creating sleek, user-friendly designs with clean and efficient code. As a perpetual learner, I thrive on embracing emerging technologies and solving complex challenges. Let's collaborate and bring your digital vision to life. Explore my portfolio to see some of my recent work, and feel free to reach out—I'd love to hear about your next project.*/