import React , {useState} from 'react'
import logo from '../images/me2.png';
import plogo from '../images/p-logo.png'
import clogo from '../images/c-logo.png'
import s from '../images/script.png'
import devopslogo from '../images/devops.png'
import flutterlogo from '../images/flutter.png'
import scriptlogo from '../images/script-logo.png'
import react from '../images/react.png'
import "./servises.scss"
import {useSpring, animated} from 'react-spring';


function Servises()  {
    /*constructor(props) {
      super(props);
      this.state = {
        linkselected: 0,
        language: 1};
      }*/
      const props = useSpring(
        { config: { duration: 300 }, 
        
        from: { opacity: 0 , marginTop:-1000 },
        to: {opacity: 1 , marginTop: 0}
      })
      const per = useSpring({ number: 90, from: { number: 0 } })

  
  return (
     <div className="servises-container">
       <animated.h2 style={props}>My servises</animated.h2>
       <div className="servises">
            <div className="grid-items">
                    <h5 className="servise-name">Develop a responsive Website</h5>
                    <ul className= "types">
                        <li className="example">Homepages</li>
                        <li className="example">Magazine websites</li>
                        <li className="example">Blogs</li>
                        <li className="example" >Portfolio websites</li>
                        <li className="example" >Social media websites.</li>
                        <li className="example" >Directory and contact pages....</li>
                    </ul>
            </div>

            <div className="grid-items">
                <h5 className="servise-name">Web Scraping</h5>
                <h6 className="servise-desc" >Web scraping ,Data extracting to a Json file ,excel...</h6>
                <div className="logo-container">
                    <img src={s} alt="mok"/> 
                </div>
            </div>
            <div className="grid-items">
            <h5 className="servise-name">DevOps</h5>
                <h6 className="servise-desc" >Host and dockerize your application and deploy in kubernetes</h6>
                <div className="logo-container">
                    <img src={devopslogo} alt="mok"/> 
                </div>
            </div>
            <div className="grid-items">
            <h5 className="servise-name">Mobile applications</h5>
                <h6 className="servise-desc" >Create mobile app development for android and IOS using Flutter</h6>
                <div className="logo-container">
                    <img src={flutterlogo} alt="mok"/> 
                </div>
            </div>
       </div>
    </div>
  );
}


export default Servises;