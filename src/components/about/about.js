import React , {useState} from 'react'
import logo from '../images/me2.png';
import plogo from '../images/p-logo.png'
import clogo from '../images/c-logo.png'
import scriptlogo from '../images/script-logo.png'
import me2 from '../images/me3.jpg'
import "./about.scss"
import {useSpring, animated} from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import barPers from "./utils";

const description = "I'm Elkarmi mohamed, Software Engineering Student 👨‍🎓, currently studing at 1337 ,highly motivated, dynamic, persevering, rigorous and passionate about IT & web and mobile development, I'm Full Stack Web Developer, also I like building new stuff and work with other people. My background doesn't contains various experiences But I promise with the best results possible.";

class About extends React.Component {
     isInViewport = (element) => {
        var box = document.querySelector('.skills'); 
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    /*constructor(props) {
      super(props);
          parseInt()  this.state = {
        linkselected: 0,
        language: 1};
      }*/
    //   const per = useSpring({ number: 90, from: { number: 0 }, })
    //   const number = parseInt(per.number).toString;

  render(){
  return (
     <div className="about-container"> 
         <div className="skills-container">
         <div>
            <h1 className="skills-titile">_MY SKILLS</h1>
            </div>
         <div className="skills">
           
         <Spring delay={500}  config={{duration: 1000}}   from={  { percent: 0 }} to={{ percent: 90}}>
            {({ percent }) => (
            <div className="item">
            <div className="skill-title">
                <h5 className="skill-name">C Language <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                
                </div>     
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                  </div>
              </div>

                <div className="logo-img" >
                    <i className="fab fa-cuttlefish icon"></i>
                </div>
            </div>
            )}
            </Spring>
            <Spring delay={1000}  config={{duration: 1000}}   from={  { percent: 0 }} to={{ percent: 80}}>
            {({ percent }) => (
            <div className="item">
            <div className="skill-title">
                <h5 className="skill-name">Python <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                </div>

           
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                     
                </div>
              </div>

                <div className="logo-img" >
                <i className="fab fa-python icon"></i>
                </div>
            </div>
            )}
            </Spring>
            <Spring delay={1500}  config={{duration: 1000}}   from={  { percent: 0  } } to={{ percent: 75,}}>
            {({ percent }) => (
           
            <div className="item">
                <div className="skill-title">
                <h5 className="skill-name">Scripting  <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                          </div>
              
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                </div>
              </div>

                <div className="logo-img" >
                <i className="fas fa-terminal icon"></i>
                </div>
            </div>
            )}
            </Spring>
            <Spring delay={2000}  config={{duration: 1000}} from={ { percent: 0 }} to={{ percent: 70}}>
            {({ percent }) => (
            <div className="item">
            <div className="skill-title" id="ee">
                <h5 className="skill-name"  >React (HTML && CSS)  <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                </div>
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                </div>
              </div>
                <div className="logo-img" id="exx">
                <i className="fab fa-react icon"></i>
                </div>
            </div>
            )}
            </Spring>
            <Spring delay={2500}  config={{duration: 1000}} from={ { percent: 0 }} to={{ percent: 95}}>
            {({ percent }) => (
            <div className="item">
            <div className="skill-title" id="ee">
                <h5 className="skill-name"  >Back-End <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                </div>
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                </div>
              </div>
                <div className="logo-img" id="exx">
                <i class="fab fa-node-js icon"></i>
                </div>
            </div>
            )}
            </Spring>
            <Spring delay={3000}  config={{duration: 1000}} from={ { percent: 0 }} to={{ percent: 40}}>
            {({ percent }) => (
            <div className="item">
            <div className="skill-title" id="ee">
                <h5 className="skill-name"  >DevOps <span className="pers">{`${percent.toFixed()}%`}</span></h5>
                </div>
              <div className="bar">
                <div style={{ width: `${percent}%` }} className="ii">         
                </div>
              </div>
                <div className="logo-img" id="exx">
                <i class="fab fa-docker icon"></i>
                </div>
            </div>
            )}
            </Spring>
         </div>
         </div>
         <div className="image-desc">
            <div className="image-2">
                <img src={me2} alt="mok"/>
            </div>
            <div className="desc">
            <div>
            <h1 className="about-titile">_ABOUT ME</h1>
            </div>
            <div className="image-3">
                <img src={me2} alt="mok"/>
            </div>
               <p className="paraga">{description}</p>
               <div className="info-container">
                 <h1 className="info-container"><span className="info-span">Age :</span> 20 Years</h1>
                 <h1 className="info-container"><span className="info-span">E-mail :</span> Elkarmimed@gmail.com</h1>
                 <h1 className="info-container"><span className="info-span">Job :</span> Software Engineer</h1>
                 <h1 className="info-container"><span className="info-span">Nationality :</span> Moroccan</h1>
                 <div>
                  </div>
              </div>
         </div>

            </div>
            <div className="test">
           
           </div>
    </div>
  );
}

}

export default About;