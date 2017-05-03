import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'
import Collapsible from 'react-collapsible'


export default class RequestSummary extends React.Component {

  render() {
    const hide = "Hide Request Summary";
    const element = document.getElementsByClassName("Collapsible__triggger")
    return (
        <div>
           
        <Collapsible trigger="Request Summary" 
         open={true} 
         onOpen={
           element.innerHTML = element.innerHTML.replace(
          '<span>Hide Request Summary</span>'
          )
           
           }
         transitionTime={200}
         triggerClassName="CustomTriggerCSS"
         triggerOpenedClassName="CustomTriggerCSS--open"
         contentOuterClassName="CustomOuterContentCSS"
         contentInnerClassName="CustomInnerContentCSS">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
      
      </div>
      );
  }
}