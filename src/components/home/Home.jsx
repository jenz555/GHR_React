import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'


import StatusBar from '../statusBar/StatusBar.jsx';
import Hero from '../hero/Hero.jsx';
import ETA from '../eta/ETA.jsx';
import RequestSummary from '../requestSummary/RequestSummary.jsx';
import MembershipBenefits from '../membershipBenefits/MembershipBenefits.jsx';
import Accordion from '../accordion/Accordion.jsx';


export default class Home extends React.Component {
   
  render() {
    return (
      <div>        
        <Hero></Hero>
        <ETA></ETA>
        <RequestSummary></RequestSummary>
        <MembershipBenefits></MembershipBenefits>
        <Accordion></Accordion>        
      </div>

      );
  }
}