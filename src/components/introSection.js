import React from 'react'
import '../css/introSection.css';
import introImg from '../images/illustration-hero.svg'

export default function IntroSection() {
  return (
    <div className='introContainer'>
        <div className="imageSec">
            <img src={introImg} alt="" />
        </div>
        <div className="infoSec">
            <h2>  A Simple Bookmark Manager</h2>
            <p> A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
            <div className="btns">
                <button> Get it on Chrome</button>
                <button> Get it on Firefox</button>
            </div>
            
        </div>
      
    </div>
  )
}
