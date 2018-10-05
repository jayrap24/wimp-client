import React, { Component } from 'react';
import Video from './Video';
import Comments from './Comments';

//import comments
class Single extends Component {
    
    render(){
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
            //console.log(this.props.params.postId);

        const post = this.props.posts[i];
           //console.log(post)

        const postComments = this.props.comments[this.props.params.postId] || [];
            //console.log(postComments)

        return(
            <div className="single-video">
                <Video i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} post={post}/>
                
            </div>
        )
    }
}

export default Single;