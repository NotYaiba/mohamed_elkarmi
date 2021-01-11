import React , {useState} from 'react'
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import './navbar.scss';


// import {auth} from '../../firbase'

class Navbar extends React.Component {

    constructor(props) {
     let path = window.location.href;
      let  links;
      if (path.endsWith("about") == true)
        links = 2;
      else
        links = 0;
      super(props);
      this.state = {
        linkselected: links,
        language: 1};

      }
      
    changelink (type) 
    {
        this.setState({linkselected:type});
    }
    changelanguage (type) 
    {
        this.setState({language:type});
    }
    

 render(){   
  return (
    <div className="navbar-conrtainer" id="Home">

        <ul className="pages-list"> 
              <li>
                <Link to="/"
                className= {this.state.linkselected == 0  ? "link-active" : "not-active"}
                onClick={()=>this.changelink(0)}
                >Home</Link>
              </li>
              <li>
                <Link to= "/about"
                className= {this.state.linkselected == 2  ? "link-active" : "not-active"}
                onClick={()=>this.changelink(2)}
                >About</Link>
              </li>
        </ul>
       
        <ul className="language-select">
            {/* <li> <a onClick={()=>this.changelanguage(0)}
            className = {this.state.language == 0  ? "link-active" : ""}>FR</a> </li> */}
            <li> <a onClick={()=>this.changelanguage(1)}
            className = {this.state.language == 1  ? "link-active" : ""}>ENG</a> </li>
        </ul>
    </div>
    
  );
}
}


export default Navbar;