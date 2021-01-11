import React , {useState} from 'react'
import logo from '../images/me.png';
import mask from '../images/mask.png';


import { Wave, Random } from 'react-animated-text';
import {useSpring, animated} from 'react-spring';
import ReactTypingEffect from 'react-typing-effect';
import './hero.scss';

// import {auth} from '../../firbase'
const para = "Hi, I'm Mohamed, a passionate self-taught Programmer and Web Developer."
function Hero(){
    /*constructor(props) {
      super(props);
      this.state = {
        linkselected: 0,
        language: 1};
      }*/
      const imagefade = useSpring(
        { config: { duration: 1000 }, 
        delay: 500,
        from: { opacity: 0},
        to: {opacity: 1 }
      })
 
  return (
     <div className="ss">
    <div className="hero-conrtainer">
        <h1 className="hello">
          HELLO
        </h1>
       <div>
       <h3>I ' am <spam>Mohamed</spam> Elkarmi</h3>
       </div>
        <div>
        <ReactTypingEffect
          text = {para}
          className="para"
          speed={25}
          typingDelay={1000}
          eraseSpeed={30}
          loop={false}
         />
        </div>


        <button className="contact-me-button">Contact me</button>
    </div>
    <animated.div style={imagefade} className="image-me">
        <img src={mask} alt="mok"/> 
    </animated.div>
    </div>
  );
}



export default Hero;