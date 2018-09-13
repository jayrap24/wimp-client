import React from 'react';

import Navigation from './Navigation'
import Jumbotron from './Jumbotron'

import './MainPage.css'


function MainPage(props){
    return (
        <div>
            <Navigation />
            <Jumbotron />
                <div className="containerVideos">      
                    <ul className="flex-container">
                        <li className="flex-item" id="firstFlex">
                            <div className="videoContainer" id="firstWebsiteContainer">
                                Video Player
                            </div>
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>
                        </li>
                        <li className="flex-item" id="secondFlex">
                            <div className="videoContainer" id="secondWebsiteContainer">
                            <p>Video Player</p>
                            </div> 
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>
                        </li>
                        <li className="flex-item" id="thirdFlex">
                            <div className="videoContainer" id="thirdWebsiteContainer">
                            Video Player
                            </div>
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>
                        </li>
                        <li className="flex-item" id="firstFlex">
                            <div className="videoContainer" id="firstWebsiteContainer">
                                Video Player
                            </div>
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>
                        </li>
                        <li className="flex-item" id="secondFlex">
                            <div className="videoContainer" id="secondWebsiteContainer">
                            <p>Video Player</p>
                            </div> 
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>
                        </li>
                        <li className="flex-item" id="thirdFlex">
                            <div className="videoContainer" id="thirdWebsiteContainer">
                            Video Player
                            </div>
                            <div className="info">
                             </div>
                            <div className="messageBoard"></div>

                        </li>
                    </ul>
                </div>   
        </div>
    )
}
  export default MainPage;