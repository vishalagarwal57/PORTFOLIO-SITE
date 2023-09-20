import React, { useState } from "react";
import "./navbar.css";
import contactimg from "../../assets/contact.png";
import { Link } from "react-scroll";
import logo from '../../assets/logo1.svg';
import menu from '../../assets/menu.png';

function Navbar() {
  const [showMenu,setShowMenu] =useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbarImg" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={100} duration={500}className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-30} duration={500}className="desktopMenuListItem">Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>
      </div>


      <button className="desktopMenuBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
        <img src={contactimg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-10} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-80} duration={500}className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-30} duration={500}className="ListItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="" spy={true} smooth={true} offset={-100} duration={500} className="
        ListItem" onClick={()=>setShowMenu(false)}>Resume</Link>
         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
