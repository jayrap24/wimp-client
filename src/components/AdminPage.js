import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function AdminPage(props){
    return (
        <div>
            <Navigation />
            <h1>Admin Page{props.count}</h1>  
             
        </div>
    )
}
  export default AdminPage;