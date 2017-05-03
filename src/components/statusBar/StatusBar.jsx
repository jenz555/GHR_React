import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { render } from 'react-dom'


const ReactHighcharts = require('react-highcharts'); 

var config = {
  chart: {
     type: 'bar'
  },
   title: {
      text: null
    },
    credits: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xAxis: {
      categories: ['High Risk', 'Average Risk', 'Low Risk'],
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      gridLineWidth: 0,
      tickColor: '#EFEFEF',
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      tickLength: 0
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            enabled: false
          },
          tooltip: {
            enabled: false
          }
        }
      },

    },
    series: [{
      name: 'Service Complete',
      data: [25],
      color: '#ccc',
      borderRadiusTopRight: 5,
      borderRadiusBottomRight: 5,
    },
    {
      name: 'Service Complete',
      data: [25],
      color: '#ccc',
    },
    {
      name: 'Service Complete',
      data: [25],
      color: '#ccc',
    },
    {
      name: 'Service Complete',
      data: [25],
      color: 'green',
      borderRadiusTopLeft: 5,
      borderRadiusBottomLeft: 5,
    }]
};

export default class StatusBar extends React.Component {
  
 componentDidMount() {
    let chart = this.refs.chart.getChart();
    
  }

  render() {
    return <ReactHighcharts config={config} domProps = {{id: 'statusBarChart'}} ref="chart"></ReactHighcharts>;
  }
};