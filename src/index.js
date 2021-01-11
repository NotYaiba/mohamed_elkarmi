import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/NavBar/navbar'
import Footer from './components/footer/footer'
import reportWebVitals from './reportWebVitals';

import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Servises from "./components/servises/servises";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
      <Route path=  {process.env.PUBLIC_URL  + "/about"}>
            <About />
          </Route>
          <Route path= {process.env.PUBLIC_URL + "/"}>
            <Hero />
        </Route>
         </Switch>
         <Footer/>
      </Router>
      
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
