import React from 'react'
 import './works.css';
 import card1 from '../../assets/card1.jpeg';
 import card2 from '../../assets/card 2.jpeg';
 import card3 from '../../assets/card3.jpeg';
 import card4 from '../../assets/card4.jpeg';
 import card5 from '../../assets/card5.jpeg';
 import card6 from '../../assets/card6.jpg';

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to the smallest details</span>
        <div className="worksImgs">
            <img src={card1} alt="" className="worksImg" />
            <img src={card2} alt="" className="worksImg" />
            <img src={card3} alt="" className="worksImg" />
            <img src={card4} alt="" className="worksImg" />
            <img src={card5} alt="" className="worksImg" />
            <img src={card6} alt="" className="worksImg" /> 
        </div>
        <button className="worksBtn">See More</button>

    </section>
  )
}

export default Works
