import React from "react";
import "./intro.css";
import bg from "../../assets/profile.jpg";
import contactimg from "../../assets/contact.png";
import { Link } from "react-scroll";
import icon from '../../assets/hacker.png'
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vishal</span>
          <br />
          Web Developer 
          <img src={icon} alt="" className="iconImg" />
        </span>
        <p className="introPara">
        "Passionate web developer dedicated to crafting seamless online experiences <br/>through innovative design and robust coding."
        </p>
        <Link>
          <button className="btn"  onClick={() => {document.getElementById('footer').scrollIntoView({behavior: 'smooth'});}}>
            <img src={contactimg} alt="Talk" className="btnImg" />
            Get In Touch
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
