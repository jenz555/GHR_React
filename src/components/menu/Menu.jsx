import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'

// import Home from '../home/Home.jsx';
// import About from '../about/About.jsx';


export default class Menu extends React.Component {
   
  render() {
    return (
<div>
     <div className="flexHeader">
	<div className="flexHeader__item--1">
		<div className="header__logo--beacon"></div>
	</div>

	<div className="flexHeader__item--4 flexHeader__item--centerCell txt--color-white txt--size-lg txt--align-center">
		Good Hands Rescue
	</div>

	<div className="flexHeader__item--1 txt--align-right">
		<ul id="toggle-nav-1" className="header__mobileUtil">
			<li>
				<button className="hamburger__container">
            <span id="hamburger-1" className="hamburger__navicon"></span>
            </button>
			</li>
		</ul>
	</div>

</div>
      
</div>


      /*<Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>*/
 
      );
  }
}