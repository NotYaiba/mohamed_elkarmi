import React , {useState} from 'react'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import './footer.scss';


// import {auth} from '../../firbase'

class Footer extends React.Component {

    // constructor(props) {
    //  let path = window.location.href;
    //   let  links =  (path == "http://localhost:3000/about") ? 1 : 0;
    //   if (path.endsWith("about") == true)
    //     links = 2;
    //   else if (path.endsWith("servises") == true)
    //     links = 1;
    //   else
    //     links = 0;
    //   super(props);
    //   this.state = {
    //     linkselected: links,
    //     language: 1};

    //   }
      
    // changelink (type) 
    // {
    //     this.setState({linkselected:type});
    // }
    // changelanguage (type) 
    // {
    //     this.setState({language:type});
    // }
    

 render(){   
  return (
    <div className="footer-conrtainer" id="Home">
       <div className="year">&#169; 2021</div>
       <ul className="contact-links">
           <li><a target="_blank" href="https://www.instagram.com/mohamedel_karmi/"><i className="fab fa-instagram link-icon"></i></a></li>
           <li><a target="_blank" href="https://github.com/NotYaiba"><i className="fab fa-github link-icon"></i></a></li>
           <li><a target="_blank" href="https://www.linkedin.com/in/mohamed-elkarmi-32aa1b1bb/"><i className="fab fa-linkedin link-icon"></i></a></li>          
       </ul>
    </div>
    
  );
}
}


export default Footer;