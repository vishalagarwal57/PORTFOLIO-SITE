import React from "react";
import "./about.css";
import AbImg from "../../assets/AboutImg.jpg";
import { BsTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="About" className="AboutSec">
      <img src={AbImg} alt="" className="AboutImg" />
      <div className="AboutData">
        <h1 className="AboutTitle">
          <span>About Me</span>
        </h1>
        <p className="AboutDesc">
        Hello, <l className="Aboutname">I'm VISHAL AGARWAL</l>, a passionate web developer with a flair for
          crafting digital experiences. My journey in web development began
          in my collage life as I see many websites and think that  I can also make which make intrested in this field so i entered in this field. With a strong foundation in
          HTML,CSS,JS,REACTJS and also C,C++,PYTHON,DSA,DAA etc, I have honed my craft
          by working on diverse projects, ranging from different projects. I'm
          committed to creating sleek, user-friendly designs with clean and
          efficient code. As a perpetual learner, I thrive on embracing emerging
          technologies and solving complex challenges. Let's collaborate and
          bring your digital vision to life. Explore my portfolio to see some of
          my recent work, and feel free to reach out—I'd love to hear about your
          next project
        </p>
        <p className="AboutDesc1">
          <BsFillPersonFill /> Vishal Agarwal
        </p>
        <p className="AboutDesc1">
          <BsTelephoneFill /> +91 7091618396
        </p>
        <p className="AboutDesc1">
          <IoMailSharp /> agarwalvishal297@gmail.com
        </p>
      </div>
    </section>
  );
};

export default About;
