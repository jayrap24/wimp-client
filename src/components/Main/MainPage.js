// the {React.cloneElement(this.props.children, this.props)} below
// lets is access the props from the video grid component
import React, { Component } from 'react';

class MainPage extends Component {
    render(){
        return(
            <div>
                <h1>Main Page</h1>
                <hr/>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default MainPage;
 