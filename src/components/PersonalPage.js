import React from 'react';

import Navigation from './Navigation'
import Footer from './Footer';

function PersonalPage(props){
    return (
        <div>
            <Navigation />
            <h1>Personal:{props.count}</h1>   
              
        </div>
    )
}
  export default PersonalPage;