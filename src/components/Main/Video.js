import React, { Component } from 'react';
import  { Link } from 'react-router';

class Video extends Component {
    render(){


        
        const { comments } = this.props;
        return(
            <div className="wrapper">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${this.props.post.code}`}>
                       <img src={this.props.post.thumbnail_src} width="300" height="200"/>
                        <h2> {this.props.post.caption} </h2>
                    </Link>

                    <div>
                        <div className="control-buttons">
                            <Link className="button" to={`/view/${this.props.post.code}`}>
                            <span className="comment-count">
                                {comments[this.props.post.code] ? comments[this.props.post.code].length : 0 } comments
                            </span>
                            </Link>
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>
        )
    }
}



export default Video;