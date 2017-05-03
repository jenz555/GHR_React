import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'
import Collapsible from 'react-collapsible'


export default class Accordion extends React.Component {
   
  render() {
    return (
        <div>
      <Collapsible trigger="Start here">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      
      </div>
      );
  }
}