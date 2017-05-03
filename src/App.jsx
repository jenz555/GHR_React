//import 'babel-polyfill'
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'
import Home from './components/home/Home.jsx';
import StatusBar from './components/statusBar/StatusBar.jsx'
import Hero from './components/hero/Hero.jsx';
import ETA from './components/eta/ETA.jsx'
import RequestSummary from './components/requestSummary/RequestSummary.jsx'
import MembershipBenefits from './components/membershipBenefits/MembershipBenefits.jsx'
import About from './components/about/About.jsx';
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import Menu from './components/menu/Menu.jsx'
//import Accordion from './components/accordion/Accordion.jsx'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Menu></Menu>
        </div>
        <StatusBar></StatusBar>
        <Home></Home>
            

        <div>
        <Footer></Footer>
        </div>
            
      </div> 
    
      );
  }
}

