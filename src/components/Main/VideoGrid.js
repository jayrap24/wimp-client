import React, { Component } from 'react';
import Video from './Video';

class VideoGrid extends Component {
    
    render(){
        return(
            <div className="video-grid">
            {this.props.posts.map((post, i) => <Video {...this.props} key={i} i={i} post={post}/>)}
            </div>
        )
    }
}

export default VideoGrid;