import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { Link } from 'react-router'

export default class ETA extends React.Component {

  render() {
    return (
      <div>
        <div className="box box--brand">
          <h3 className="txt txt--align-center txt--color-white">ETA: 84 minutes | 11:48 A.M.</h3>


        </div>
      </div>
      
      );
  }
}

