import React, { Component } from 'react';


class Navigation extends Component {
    render() {
      return (
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">Wimp.</a>
                    </div>
                    <ul class="nav navbar-nav">
                    <li><a href="/">Join</a></li>
                    <li><a href="/">Log in</a></li>
                    <li><a href="/personal">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default Navigation;