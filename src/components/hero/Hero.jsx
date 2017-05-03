import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'


export default class Hero extends React.Component {
   
  render() {
    return (
        <div>
           
        <div className="animate__3--container">
            <div className="animate__3--mid--bkg"></div>
            <div className="animate__3--fore--bkg"></div>
            <div className="animate__3--truck"></div>
            <div className="animate__3--road"></div>
            <div className="animate__3--title">Provider En Route</div>
            <div className="animate__3--shadow"></div>
        </div>
      
      </div>
      );
  }
}