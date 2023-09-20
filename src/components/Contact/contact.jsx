import React, { useRef } from "react";
import "./contact.css";
import fb from "../../assets/facebook-icon.png";
import insta from "../../assets/instagram.png";
import twit from "../../assets/twitter.png";
import github from "../../assets/github-icon.png";
import linkdin from "../../assets/linkedin_icon.webp";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rsubf8', 'template_4ued02h', form.current, 'noLEaSaoU-ZXVT4x-')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="ContactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Connect With us</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='your_name' />
          <input type="email" className="email" placeholder="Your Email" name='your_email' />
          <textarea 
            name="message"
            id=""
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/vishal-agarwal-8648b1231" target="_blank">
            <img src={linkdin} alt="Linkdin" className="link" />
            </a>
              <a href="https://github.com/vishalagarwal57" target="_blank">
              <img src={github} alt="github" className="link" />
              </a>
                <a href="https://instagram.com/_vishal.agarwal?igshid=YmMyMTA2M2Y=" target="_blank">
                <img src={insta} alt="Instagram" className="link" />
                </a>
                  <a href="https://twitter.com/VishalA51547889/status/1481248827365818368?t=88U3YeMkthVbeQk0Hs6BDQ&s=19" target="_blank">
                  <img src={twit} alt="twitter" className="link" />
                  </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
