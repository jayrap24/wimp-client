import React, { Component } from 'react';

import './Jumbotron.css'


class Jumbotron extends Component {
    render() {
      return (
        <div>
            <div class="container-fluid">
                <div class="jumbotron">
                    <h1>Bootstrap Tutorial</h1>      
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                </div>     
            </div>
        </div>
      );
    }
  }
  
  export default Jumbotron;